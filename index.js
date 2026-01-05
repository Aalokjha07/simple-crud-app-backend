const mongoose = require('mongoose');
const express = require('express');
const Product =  require('./models/product.model.js');
const ProductRoute = require('./routes/product.route.js');
const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/Reports' , ReportRoute);


app.get('/', (req , res) =>{
    res.send('hello from node api server');
})

mongoose.connect('mongodb+srv://admin:mwVWwT6SNS7QV5Tj@db.uoqna3k.mongodb.net/NODE-API?appName=DB')
.then(()=>{
    console.log('connected to database..!')
    app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})
})
.catch(()=>{
    console.log('connection failed...!s')
})
 