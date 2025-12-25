require('dotenv').config(); // load .env.local
const mongoose = require('mongoose');

async function testConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB!");
    await mongoose.connection.close();
  } catch (err) {
    console.error("❌ Connection failed:", err);
  }
}

testConnection();
