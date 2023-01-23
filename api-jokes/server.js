const express = require("express");
const { connectMongo } = require("./config/mongoose.config");
const { jokeRouter } = require("./router/jokes.router");
const cors = require('cors');
const port = 3001;

connectMongo();

app = express();
app.use(cors());
app.use(express.json());

app.use('/api/jokes', jokeRouter);

app.listen(port, ()=> {
    console.log("It's alive!");
});