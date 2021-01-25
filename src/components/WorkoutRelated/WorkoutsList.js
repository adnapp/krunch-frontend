import React from "react"
import WorkoutCard from "./WorkoutCard"

function WorkoutsList({allWorkouts}){

    const workoutsObj = allWorkouts.map(workout => {
        return <WorkoutCard
                    workout = {workout}
                    key = {workout.id}
            />
    })


    return (
        <div className="workouts-list">
            <h1>Your Workouts </h1>
            <p>{workoutsObj}</p>
        </div>
        
    )
}

export default WorkoutsList;