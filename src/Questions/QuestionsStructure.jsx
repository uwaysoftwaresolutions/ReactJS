import React from "react";
import Questions from "./Questions";
import { Depression } from "./DepressionApi"
import { DepressionForNew } from "./DepressionForNewApi";
import { Anxiety } from "./AnxietyApi";
import Bipolar from "./Bipolar";
import Pyschosis from "./Pyschosis";
import Addiction from "./Addiction";
import { Route, Routes } from "react-router-dom";

const QuestionsStructure = () => {
    return (
        <>
            <Routes>
                <Route exact path="/depression" element={<Questions data={Depression} />} />
                <Route exact path="/depressionfornew" element={<Questions data={DepressionForNew} />} />
                <Route exact path="/anxiety" element={<Questions data={Anxiety}/> }/>
                <Route exact path="/bipolar" element={<Bipolar />} />
                <Route exact path="/psychosis" element={<Pyschosis />} />
                <Route exact path="/addiction" component={<Addiction />} />
            </Routes>

        </>
    )
}

export default QuestionsStructure;