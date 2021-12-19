import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import QuestionsStructure from './Questions/QuestionsStructure';
import Questions from './Questions/Questions';
import { Depression } from './Questions/DepressionApi';
import { DepressionForNew } from "./Questions/DepressionForNewApi";
import { Anxiety } from "./Questions/AnxietyApi";
import Bipolar from "./Questions/Bipolar";
import Pyschosis from "./Questions/Pyschosis";
import Addiction from "./Questions/Addiction";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/depression" element={<Questions data={Depression} />} />
        <Route path="/depressionfornew" element={<Questions data={DepressionForNew} />} />
        <Route path="/anxiety" element={<Questions data={Anxiety} />} />
        <Route path="/bipolar" element={<Bipolar />} />
        <Route path="/psychosis" element={<Pyschosis />} />
        <Route path="/addiction" component={<Addiction />} />
      </Routes>

    </>
  )
}
export default App;
