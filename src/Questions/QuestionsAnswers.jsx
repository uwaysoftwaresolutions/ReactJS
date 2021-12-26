import React, { useState,useEffect } from "react";

const QuestionsAnswers = (props) => {
  const [Options,setOptions]=useState(); 

const Answer1=()=>{
    setOptions(props.option1);
}
const Answer2=()=>{
    setOptions(props.option2);
}
const Answer3=()=>{
    setOptions(props.option3);
}
const Answer4=()=>{
    setOptions(props.option4);
}

   useEffect(() => {
       localStorage.setItem("lists",JSON.stringify(Options));
   }, [Options])
    return (
        <>  
            <p className="question fs-4">{props.question}</p>
            <div className="options mx-auto">
                <button  className="option1 my-3 mx-3" onClick={Answer1}>{props.option1}</button>
                <button  className="option1 my-3 mx-3" onClick={Answer2}>{props.option2}</button>
                <button  className="option1 my-3 mx-3" onClick={Answer3}>{props.option3}</button>
                <button  className="option1 my-3 mx-3" onClick={Answer4}>{props.option4}</button>
            </div>
        </>
    )
}

export default QuestionsAnswers;