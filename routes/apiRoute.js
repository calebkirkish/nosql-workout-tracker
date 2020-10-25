const app = require('express').Router();
const Workout = require('../models/workout_model.js');


app.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

app.get('/api/workouts', (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

app.get('/api/workouts/range', (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

app.put('/api/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate(
        {_id: req.params.id},
        { $push: {exercises: req.body}},
    ).then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
    })
    console.log(req);
    res.json(req.body);
})

module.exports = app;