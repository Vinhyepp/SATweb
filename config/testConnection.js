require('dotenv').config();
const mongoose = require('mongoose');

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected Successfully!');
    console.log('Connection Host:', mongoose.connection.host);
    console.log('Database Name:', mongoose.connection.name);
  } catch (error) {
    console.error('Connection Error:', error.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
};

testConnection();
