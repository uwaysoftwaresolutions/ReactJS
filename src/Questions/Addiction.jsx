import React, { useState } from "react";
import { AddictionApi } from "./AddictionApi";
import TwoOptions from "./TwoOptions";

const Addiction = () => {
    const [data,setData]=useState(AddictionApi);
    return (
        <>
            <div className="container-fluid nav_bg">
                <div class="row">
                    <div class="col-10 mx-auto">
                    <h1 className="heading display-1 fw-bolder mx-auto mb-5" style={{color:"darkcyan"}}>Addiction Test</h1>
                    {
                            data.map((val, index) => {
                                return (
                                    <TwoOptions
                                        question={val.question}
                                        option1={val.option1}
                                        option2={val.option2}
                                        key={index}
                                    />
                                )
                            })
                        }
                        <button className="next">NEXT </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addiction;