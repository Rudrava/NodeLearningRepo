const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

// initializing express app
const app = express();

// getting env vars
require('dotenv/config');

// body parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use(cors())

// routing and routing middleWares
const postRouter = require('./router/postRoute');
app.use('/post', postRouter);

app.get('/', (req, res) => {
    res.send('Hello World!!');
})

// CONNECTION TO MONGODB
mongoose.connect(
    process.env.MONGO_URI ,
    {
        useNewUrlParser: true,
         useUnifiedTopology: true,
    },
    (err) => {
        if (!err) {
            console.log("Connected to MongoDB Altas database");
        } else {
            console.log(`Failed to connect to MongoDB Atlas database : ${err}`);
        }
    }
);
// binding app to  PORT 3000 of LOCALHOST 
app.listen(8888, () => {
    console.log("dobey is here master!!");
});