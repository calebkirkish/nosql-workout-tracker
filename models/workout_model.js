const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Resistance or cardio'
            },
            name: {
                type: String,
                trim: true,
                required: 'Enter the name of the workout'
            },
            duration: {
                type: Number,
                required: 'Enter the Duration in seconds'
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }


        }

    ]
},
    {
        toJSON: { // Adds a virtual property not stored in Mongo
            virtuals: true
        }
    });


workoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;