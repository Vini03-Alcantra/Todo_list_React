import { useHistory, useParams } from "react-router-dom";
import React from "react";
import Button from "./Button"

import "./TaskDetails.css"

const TaskDetails = () =>{
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack()
    }

    return (  
        <>  
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas architecto dolorum voluptates aut,
                    quo nobis et dolore velit, nesciunt non esse repudiandae optio vitae placeat odio accusantium nulla eveniet neque?
                </p>
            </div>
        </>
    )
}

export default TaskDetails;