const express = require('express');
const mongoose = require('mongoose');

const restaurantRouter = require('./routes/restaurantRouter.js');
const app = express();
app.use(express.json());  

const DB_URL = 'mongodb+srv://roberto:474220Abc@cluster0.isirs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server")
})
.catch(err => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
})

app.use(restaurantRouter)

const PORT = 3000
app.listen(PORT, () => { console.log(`Server is running at http://localhost:${PORT}`) })