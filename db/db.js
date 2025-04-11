const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const { MONGO_KEY } = process.env;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_KEY, { });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

module.exports = connectDB;