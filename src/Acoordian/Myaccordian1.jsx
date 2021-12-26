import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import QuestionsStructure from "../Questions/QuestionsStructure";



const Myaccordian1 = (props) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="container-fluid ">
                <div class="row">
                    <div class="col-12 mx-auto">
                        <div className="item">
                            <div className="title d-flex justify-content-center">
                                <Link to={props.navigate}>
                                    <h2>{props.question}</h2>
                                </Link>
                                <h3 onClick={() => setShow(!show)} className="main-para ms-auto ">{show ? "-" : "+"}</h3>
                            </div>
                            {show && <div className="content fs-5">{props.answer}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Myaccordian1;