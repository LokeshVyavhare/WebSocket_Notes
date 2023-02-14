const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/chattingApp';
mongoose.set('strictQuery', false);

const connect = ()=>mongoose.connect(MONGODB_URL);

module.exports = connect;