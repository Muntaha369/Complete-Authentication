# 🔐 Full-Stack Authentication App

A full-stack authentication system built with **Node.js** (Express, MongoDB, Mongoose, Nodemailer) and **Next.js** for the frontend. Users can register, log in, and receive OTPs via email.

---

## 📁 Project Structure

├── client/ # Frontend - Next.js
│ └── ...
├── server/ # Backend - Node.js/Express
│ └── ...
└── README.md


---

## 🧰 Tech Stack

### 📦 Backend
- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **Nodemailer** (for sending OTP emails)
- **dotenv** (for environment variables)

### 🎨 Frontend
- **Next.js**
- **React**
- **Tailwind CSS** -

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 🔧 Prerequisites
- Node.js and npm installed
- MongoDB running locally or MongoDB Atlas connection URI

---

### 🔌 Backend Setup (Express)

    1. Open a terminal and run:

```bash
cd server
npm install
```
2.Create a .env file inside the server/ folder:

PORT=5000
MONGO_URI=your_mongodb_connection_uri
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password

3.Start the server:

```bash
nodemon index.js
```

🌐 Frontend Setup (Next.js)

1.Open a new terminal:

```bash
cd client
npm install
```

2.Start the frontend:

npm run dev
