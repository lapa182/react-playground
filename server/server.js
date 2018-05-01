const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const sendEmailRoute = require('./emailSMTP');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/api', sendEmailRoute);

app.listen(port, () => console.log(`Listening on port ${port}`));