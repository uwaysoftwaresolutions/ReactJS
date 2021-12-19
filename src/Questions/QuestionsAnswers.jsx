import React from "react";

const QuestionsAnswers = (props) => {
    return (
        <>  
            <p className="question fs-4">{props.question}</p>
            <div className="options  mx-auto">
                <button className="option1 my-3 mx-3">{props.option1}</button>
                <button className="option2 my-3 mx-3">{props.option2}</button>
                <button className="option3 my-3 mx-3">{props.option3}</button>
                <button className="option4 my-3 mx-3">{props.option4}</button>
            </div>
        </>
    )
}

export default QuestionsAnswers;