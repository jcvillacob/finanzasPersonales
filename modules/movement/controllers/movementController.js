const Movement = require('../models/movementModel');

exports.getAllMovements = (req, res) => {
    const userId = req.userData.userId;
    Movement.find({ userId: userId }, (err, movement) => {
    if (err) res.status(500).send(err);
    res.status(200).json(movement);
  });
};

exports.getMovementById = (req, res) => {
    Movement.findById(req.params.id, (err, movement) => {
    if (err) res.status(500).send(err);
    res.status(200).json(movement);
  });
};

exports.createMovement = (req, res) => {

  const newMovement = new Movement(req.body);
  newMovement.userId = req.userData.userId;
  newMovement.save((err, movement) => {
    if (err) res.status(500).send(err);
    res.status(201).json(movement);
  });
};

exports.updateMovement = (req, res) => {
    Movement.findByIdAndUpdate(req.params.id, req.body, (err, movement) => {
    if (err) res.status(500).send(err);
    res.status(200).json(movement);
  });
};

exports.deleteMovement = (req, res) => {
    Movement.findByIdAndDelete(req.params.id, (err) => {
    if (err) res.status(500).send(err);
    res.status(204).send();
  });
};