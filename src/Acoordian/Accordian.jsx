import React, { useState } from "react";
import { questions } from "./AccordianApi";
import Myaccordian1 from "./Myaccordian1";
import "./Accordian.css";

const Accordian = () => {
    const [data, setData] = useState(questions);
    return (
        <>
            <div className="wrapper">
                <div className="accordian">
                    {
                        data.map((curElem) => {
                            return (
                                <Myaccordian1
                                    question={curElem.question}
                                    answer={curElem.answer}
                                    id={curElem.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Accordian;