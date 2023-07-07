const express = require('express');
const routes = require('./routes');
require('dotenv/config');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

console.log(`Server rodando na porta ${process.env.PORT}`)
app.listen(process.env.PORT);