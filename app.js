import express from 'express';

import workoutsRoutes from './routes/workoutsRoutes.js'  // imports routes for anyting that starts with /workouts

import Workouts from './models/Workouts.js' // imports the model that are stored in the database.

const app = express();
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb').MongoClient
// const mongoose = require('mongoose');

// const port  = process.env.PORT || 8000;

// 

app.set('view engine', 'ejs');      // use ejs to build pages, which is also why res.render 'index' knows to find index.ejs

app.set('views', './views');    // looks for ejs files form the view folder

app.use(express.urlencoded({extended: true}));    // reads form data and adds it to req.body, without req.body would be empty when the form is sumbitted

app.use(express.json());    // needed for updates and deletes

app.use(express.static('public'));  // send files to the browswer when the browser asks for it, taken from the public folder like css, browser-side js, and images

app.use('/workouts', workoutsRoutes)    // this will send req's to the workoutsRoutes file

// mongoose.connect(url, {
// //   require('./app/routes.js')(app, passport, db, ObjectId); 
// }).then(() => {
//     console.log('Connected to the database')
// })

app.get('/', async (req, res, next) => {      // will display every workout on the homepage    
    
    try {                                                       // gets every worlkout from the databse and 
        const sessions = await Workouts.find().sort({date: -1}) // find then sort returns the data and -1 sorts them by the newest

        res.render('index', {sessions}) 
    } catch(error) {
        next(error)
        console.log('Failed to get data')
    }
})


export default app  // keep as last line