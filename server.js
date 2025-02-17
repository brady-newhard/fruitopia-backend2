const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const port = process.env.PORT;
const app = express();
BASE_URL = "https://www.fruityvice.com/api/fruit"
//middleware

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Backend');
});

app.get('/fruits', async (req, res) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/all`);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to Fetch Data' });
    }
});

app.get('/fruits', async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }
        const response = await axios.get(`${BASE_URL}/${name}`);
        const data = response.data;
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to Fetch Data' });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})