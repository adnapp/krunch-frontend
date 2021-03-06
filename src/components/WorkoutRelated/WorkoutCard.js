import React from "react"
import {Link} from "react-router-dom"

function WorkoutCard({workout}){
    const {date, name, exercises, id, notes} = workout 
    
    const exerciseObj = () => {
        if (exercises[0]) {
            return exercises.map(exercise => {
                return <li key={exercise.id}>
                            {exercise.exercise}
                        </li>})}
        else {return <p>Add some exercise to this workout!</p>}
    }

    return (
        <>
        <div class="workout-list-card">
            <Link to={`/workouts/${id}`}><div class="pics_card" >
                <div class="txt_titre_card">{name} on {(date).slice(6,10)}</div>
                </div>
            <div class="txt_desciption_card">{notes}</div>
            </Link>
        </div>
        </>
    )
}

export default WorkoutCard;