const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./modules/user');
const movement = require('./modules/movement');
const login = require('./modules/login');
const auth = require('./middleware/auth');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config({path : 'variables.env'});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// middleware
// app.use(middleware);
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/login', login.loginRoutes);
app.use('/users', auth.auth, user.userRoutes);
app.use('/movements', auth.auth, movement.movementRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});