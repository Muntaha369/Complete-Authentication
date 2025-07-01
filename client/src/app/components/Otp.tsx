"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useStore } from './zust';



const OTPPage = () => {
  const [Otp, setOtp] = useState('');

  const { email, pass, otp, updateData } = useStore()

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/verify-otp', {
    email: email,
    pass: pass,
    otp:Otp
  })
  .then(function (response) {
    console.log(response);
    router.push('/signin')
  })
  .catch(function (error) {
    console.log(error);
  });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br text-black from-indigo-400 to-cyan-500 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Enter OTP</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={Otp}
            onChange={(e)=>setOtp(e.target.value)}
            placeholder="Enter OTP"
            className=" text-black w-full px-4 py-2 border rounded-xl text-xl text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
          >
            Verify OTP
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Didn't receive code? <a href="#" className="text-indigo-600 underline">Resend OTP</a>
        </p>
      </div>
    </div>
  );
};

export default OTPPage;
