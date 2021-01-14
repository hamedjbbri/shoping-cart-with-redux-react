require("dotenv").config();
const express = require("express");
const connectDB = require('./config/db');
connectDB();
const productRoutes = require ('./routes/productRoutes')
const path = require('path')


const app = express();

app.use(express.json());

app.use('/api/products', productRoutes)
 

// erve static assets if in production

if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('frontend/build'));

    app.get('*', (req,res) => {
       res.sendFile(path.resolve(__dirname, '../frontend', 'build','index.html'))
    })


}

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`server running on port ${PORT}`))

