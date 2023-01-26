const express = require("express");
const { connectMongo } = require("./config/mongoose.config");
const { authorRouter } = require("./router/author.router");
const cors = require('cors');
const port = 3001;

connectMongo();

app = express();
app.use(cors());
app.use(express.json());

app.use('/api/author', authorRouter);

app.listen(port, ()=> {
    console.log(`It's alive!, running on port ${port}`);
});