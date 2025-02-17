const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const port = process.env.PORT;
const app = express();

//middleware

app.use(cors());



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
}