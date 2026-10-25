import Workouts from '../models/Workouts.js'        // imports the model from Workouts.js so that it can be saved to the databse

export async function createWorkout(req, res, next) {       // this function runs when the form is submitted (the POST request)
                                                            // next passes errors to express 
    try {
        const { date, sessionType, jumpRope, shadowBox, heavyBag, padWork, drills, sparring, weightTraining } = req.body    // pulls each field out and req.body holds the form data
                                                                                                                            // like a selection is held in req.body.sessionType
        const newWorkouts = await Workouts.create({     // creates a new wokrout in the database, await means mongoose checks every
            date,                                       // value first to make sure something that isnt allowd is wasnt entered, then   
            sessionType,                                // it an erorr will occur and itll jump to catch.
            jumpRope, 
            shadowBox, 
            heavyBag, 
            padWork, 
            drills, 
            sparring, 
            weightTraining
    })
        // res.status(201).json({          // use to test and see fi a workout is savedin the databse
        //    success: true,
        //    msg: 'Workout has been created',
        //    newWorkouts
        res.redirect('/')       
    
}   catch(error) {   // if the save attempt fails then an error is thrown.
        next(error)
    }
    
}

export async function completedWorkout(req, res, next) {

    try {
        const {id} = req.params

        const updatedSessions = await Workouts.findByIdAndUpdate(
            id,
            {completed: true},
            {new: true}
        )

        res.status(200).json({
            success: true,
            msg: 'Workout has been completed',
            updatedSessions
        })
}   catch(error) {
        next(error)
    }

}

export async function deleteSession(req, res, next) {

    try {
        const {id} = req.params

        const deleteThisSesh = await Workouts.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            msg: 'Workout session has been deleted',
            deleteThisSesh
        })
}   catch(error) {
        next(error)
}

}