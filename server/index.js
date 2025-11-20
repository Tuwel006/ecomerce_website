require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const helmet = require('helmet');

// Set default environment variables if not provided
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.BASE_API_URL = process.env.BASE_API_URL || 'api';
process.env.JWT_SECRET = process.env.JWT_SECRET || 'fallback-jwt-secret-key';
process.env.MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://tuwelshaikh006:73312100@cluster0.nompnie.mongodb.net/ecommerce?retryWrites=true&w=majority';
process.env.CLIENT_URL = process.env.CLIENT_URL || 'https://mern-ecommerce-bxruipfmp-sabbirs-projects-23d9d54a.vercel.app';

const keys = require('./config/keys');
const routes = require('./routes');
const socket = require('./socket');
const setupDB = require('./utils/db');

const { port } = keys;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: true
  })
);
app.use(cors());

setupDB();
require('./config/passport')(app);

// Debug route to check environment variables
app.get('/debug', (req, res) => {
  res.json({
    NODE_ENV: process.env.NODE_ENV,
    BASE_API_URL: process.env.BASE_API_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    MONGO_URI: process.env.MONGO_URI ? 'SET' : 'NOT SET',
    JWT_SECRET: process.env.JWT_SECRET ? 'SET' : 'NOT SET',
    port: port,
    message: 'Server is running!'
  });
});

app.use(routes);

const server = app.listen(port, () => {
  console.log(
    `${chalk.green('✓')} ${chalk.blue(
      `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
    )}`
  );
});

socket(server);
