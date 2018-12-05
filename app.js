require('dotenv-safe').load();
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const consign = require('consign');
const helmet = require('helmet');
const cors = require('cors');
const conn = require('./models/connection.js');
const port = process.env.PORT || 3000;

const app = express();

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyparser());
app.use(express.static(path.join(__dirname, 'public')));

consign({})
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app)
;

app.listen(port, () => console.log('Server running'))
