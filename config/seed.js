const mongoose = require('mongoose');
require('dotenv').config();

const User = require('../SAT2/server/models/User');

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});

    // Create sample users
    const users = [
      {
        email: 'admin@example.com',
        firstName: 'Admin',
        lastName: 'User',
        password: '$2a$10$KHI1Upf9H/4rVJYQ3HKQxOYwjEdzp9JV9g6XJp.JCpz0Y/InEQmKG', // Vinh^225685
        role: 'admin'
      },
      {
        email: 'student@example.com',
        firstName: 'Student',
        lastName: 'Test',
        password: '$2a$10$YourHashedPasswordHere',
        role: 'student'
      }
    ];

    await User.insertMany(users);
    console.log('Sample data seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
