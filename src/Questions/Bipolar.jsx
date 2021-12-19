import React, { useState } from "react";
import { BipolarApi } from "./BipolarApi";
import TwoOptions from "./TwoOptions";
import "./Questions.css";

const Bipolar = () => {
    const[data,setData]=useState(BipolarApi);
    return (
        <>
            <div className="container-fluid nav_bg">
                <div class="row">
                    <div class="col-10 mx-auto">
                        <h1 className="heading display-1 fw-bolder mx-auto mb-5" style={{color:"darkcyan"}}>Bipolar Test</h1>
                        <h3 className="question">1. Has there ever been a period of time when you were not your usual self and...</h3>

                        {
                            data.map((val,index)=>{
                                return(
                                    <TwoOptions
                                    question={val.question}
                                    option1={val.option1}
                                    option2={val.option2}
                                    key={index}
                                    />
                                )
                            })
                        }

                        <h3 className="question">2. If you checked YES to more than one of the above, have several of these ever happened during the same period of time?</h3>
                        <div className="options my-auto mx-auto">
                            <button className="option1 my-3 mx-3">YES</button>
                            <button className="option2 my-3 mx-3">NO</button>
                        </div>
                        <h3 className="question">3. How much of a problem did any of these cause you?
Like being unable to work; having family, money or legal troubles; getting into arguments or fights?</h3>
                        <div className="options my-auto mx-auto">
                            <button className="option1 my-3 mx-3">NO PROBLEM</button>
                            <button className="option2 my-3 mx-3">MINOR PROBLEM</button>
                            <button className="option2 my-3 mx-3">MODERATE PROBLEM</button>
                            <button className="option2 my-3 mx-3">SERIOUS PROBLEM</button>
                        </div>
                        <h3 className="question">4. Have any of your blood relatives had manic-depressive illness or bipolar disorder?
i.e. Children, siblings, parents, grandparents, aunts, and uncles.</h3>
                        <div className="options my-auto mx-auto">
                            <button className="option1 my-3 mx-3">YES</button>
                            <button className="option2 my-3 mx-3">NO</button>
                        </div>
                        <h3 className="question">5. Has a health professional ever told you that you have manic-depressive illness or bipolar disorder?</h3>
                        <div className="options my-auto mx-auto">
                            <button className="option1 my-3 mx-3">YES</button>
                            <button className="option2 my-3 mx-3">NO</button>
                        </div>
                        <button className="next">NEXT </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bipolar;