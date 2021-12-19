import React from "react";
import "./Questions.css";

const TwoOptions = (props) => {
    return (
        <>
            <h3 className="question">{props.question}</h3>
            <div className="options my-auto mx-auto">
                <button className="option1 my-3 mx-3">{props.option1}</button>
                <button className="option2 my-3 mx-3">{props.option2}</button>
            </div>
        </>
    )
}

export default TwoOptions;