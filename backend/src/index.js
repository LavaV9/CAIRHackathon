const express = require('express');
const predictRoute = require('./routes/predict');
const app = express();

app.use(express.json());
app.use('/predict', predictRoute);