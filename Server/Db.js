const mongoose = require('mongoose');

const ConnectDB = async()=>{

try {
 await mongoose.connect('mongodb://127.0.0.1:27017/crud');
       console.log('Connected!');
} catch (error) {
  console.error('Connection failed')
  process.exit(0);
}
}

module.exports = ConnectDB