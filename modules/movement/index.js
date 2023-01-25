const movementRoutes = require('./routes');
const movementController= require('./controllers/movementController');
const Movement = require('./models/movementModel');

module.exports = {
  movementRoutes ,
  movementController,
  Movement
};