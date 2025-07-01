const express = require('express');
const app = express();
let nodemailer = require('nodemailer');
const ConnectDB = require('./Db')
const User = require('./modle')
const generatePassword = require('./genratepass')
const cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.get('/',async(req,res)=>{
  const allUsers = await User.findOne({})
  res.send(allUsers)
})


const otpStore = {}; 

app.post('/api/request-otp', async (req, res) => {
  const { name, email, pass } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.json({ msg: 'User already exists' });
  }

  const otp = generatePassword(6);
  otpStore[email] = { otp, name, createdAt: Date.now() };

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.SEDER_EMAIL}`,
      pass: `${process.env.SENDER_PASS}`
    }
  });

  let mailOptions = {
    from: `${process.env.SEDER_EMAIL}`,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is: ${otp}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      return res.status(500).json({ msg: 'Failed to send OTP' });
    } else {
      console.log('Email sent: ' + info.response);
      return res.json({ email, pass });
    }
  });
});

app.post('/api/verify-otp', async (req, res) => {
  const { email, pass, otp } = req.body;

  const record = otpStore[email];
  if (!record) {
    return res.status(400).json({ msg: 'No OTP requested for this email' });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ msg: 'Invalid OTP' });
  }

  const UserCreated = await User.create({ name: record.name, email, pass });
  delete otpStore[email]; 

  res.json({ msg: 'User created successfully', user: UserCreated });
});


app.post('/api/login', async(req,res)=>{
  const { email, pass } = req.body;
  const userExist = await User.findOne({email});
  
  if(!userExist) {return res.status(401).json({msg:'User do not exist'})}

  const isPasswordValid = pass;
 
  if (!isPasswordValid) {
    return res.status(401).json({ msg: "Invalid credentials" });
  }

  
  res.status(200).json({
    msg:'logged in successfully',
  })
  
})

ConnectDB().then(
()=> app.listen(PORT,()=>{console.log(`Port working on ${PORT}`)}));