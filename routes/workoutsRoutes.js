import express from 'express'

import {createWorkout, completedWorkout, deleteSession} from '../controllers/workoutsController.js'  // this imports the function from workoutsController which handles workoout sessions beig saved to the databse.

const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        msg: 'Hello World'
    })
})

router.post('/', createWorkout)

router.put('/:id', completedWorkout)

router.delete('/:id', deleteSession)

export default router   // exports router to app.js