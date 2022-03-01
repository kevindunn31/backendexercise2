const express = require('express');
const cors = require('cors');

const app = express();

const {getHouses, deleteHouse, createHouse, updateHouse } = require('./controller');

app.use(express.json());
app.use(cors());

app.get(`/api/houses`, getHouses)
app.delete(`/api/houses/:id`, deleteHouse)
app.post(`/api/houses`, createHouse)
app.put(`/api/houses/:id`, updateHouse)


app.listen(4004, () => {
    console.log('Going through port 4004')
});