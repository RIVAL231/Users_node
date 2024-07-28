const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:admin@cluster3.ngnmypz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3")
.then(() => {
    console.log('Connected successfully to MongoDB');
})
.catch(err => {
    console.error('Connection error', err);
});

// Define a schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: String
});

// Create and export a model
module.exports = mongoose.model('User', userSchema);
