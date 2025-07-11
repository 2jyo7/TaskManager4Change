const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
// Function to connect to MongoDB

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
 }

 module.exports = connectDB;