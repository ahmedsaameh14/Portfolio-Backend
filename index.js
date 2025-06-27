// IMPORTS
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/images',express.static('./images'));

// Connect  DB
mongoose.connect('mongodb://localhost:27017/myData')    
.then(console.log('✅ Database Connected'));

// Routes
app.use('/profile', require('./routes/profileRoutes'));
app.use('/social', require('./routes/socialRoutes'));
app.use('/about', require('./routes/aboutRoutes'));
app.use('/experince', require('./routes/experinceRoutes'));
app.use('/projects', require('./routes/projectRoutes'));
app.use('/contact', require('./routes/contactRoutes'));

const port = 2000;
app.listen(port , () =>{
    console.log(`🚀 Server Started at port ${port}`);
})