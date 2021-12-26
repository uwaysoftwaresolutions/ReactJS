import React from "react";
import QuestionsAnswers from "./QuestionsAnswers";
import "./Questions.css";


const Questions = (props) => {
    const submit = () => {
        alert("form submitted");
    }
    return (
        <>
            <div className="container-fluid nav_bg">
                <div class="row">
                    <div class="col-10 mx-auto">
                        <h1 className="heading display-1 mx-auto mb-5 fw-bolder" style={{ color: "darkcyan" }}>Depression Test</h1>
                        {
                            props.data.type.map((curElem) => {
                                return (
                                    <QuestionsAnswers
                                        id = {curElem.id}
                                        question={curElem.question}
                                        option1={curElem.option1}
                                        option2={curElem.option2}
                                        option3={curElem.option3}
                                        option4={curElem.option4}
                                    />
                                )
                            })
                        }
                        
                        <button className="next" onClick={submit}>SUBMIT</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Questions;