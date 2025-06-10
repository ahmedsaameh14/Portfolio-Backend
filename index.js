// IMPORTS
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use('/uploads',express.static('./uploads'));

// Create - Config  DB
mongoose.connect('mongodb://localhost:27017/myData')    
.then(console.log('✅ Database Connected'));

// Routes
app.use('/about', require('./routes/aboutRoutes'));
app.use('/contact', require('./routes/contactRoutes'));
app.use('/projects', require('./routes/projectRoutes'));

const port = 2000;
app.listen(port , () =>{
    console.log(`🚀 Server Started at port ${port}`);
})