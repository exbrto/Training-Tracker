import mongoose from 'mongoose'

// Schema is like a blueprint for one worklout session. enum: [] --> says these are the only values allowd for this feild.
// lowercase: true ==> turn the value into lowercase before saging it. 
const workoutsSchema =  new mongoose.Schema({
    date: {type: Date},
    sessionType: {type: String, enum: ['boxing', 'kickboxing/muay thai', 'strength training'], lowercase: true, required: true},    // option value must in the select must be the same as the string must lowercased
    jumpRope: {type: String, enum: ['yes', 'no'], lowercase: true, required: true},
    shadowBox: {type: String, enum: ['yes', 'no'], lowercase: true, required: true},
    heavyBag: {type: String, enum: ['yes', 'no'], lowercase: true, required: true},
    padWork: {type: String, enum: ['yes', 'no'], lowercase: true, required: true},
    drills: {type: String, enum: ['yes', 'no'], lowercase: true, required: true},
    sparring: {type: String, enum: ['yes', 'no'], lowercase: true, required: true},
    weightTraining: {type: String, enum: ['push day', 'pull day', 'leg day', 'no weight training'], lowercase: true, required: true},
    completed: {type: Boolean, default: false}
})

// The model is what we use to Create, Read, Update, and Delete workout sessions
// Workouts is what becomes the collection 'workouts' in the mongodb database
const Workouts = mongoose.model('Workouts', workoutsSchema)

export default Workouts     // exports the model so that workoutsContoler.js can usse it