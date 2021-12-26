import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Accordian from "./Acoordian/Accordian";
import Questions from "./Questions/Questions";
import QuestionsStructure from "./Questions/QuestionsStructure";


const Home = () => {
   
   return (
      <>
         <div className="container-fluid nav_bg">
            <div class="row">
               <div class="col-10 mx-auto">
                  <div className="container-fluid ">
                     <div className="main_block mx-sm-auto my-5 px-5  border border-1">
                        <h1 className="main_heading display-1 mb-5 fw-bolder" style={{ color: "darkcyan" }}>Take a Mental Health Test</h1>
                        <p className="main_para text-justify fs-3">Online screening is one of the quickest and easiest ways to determine whether you are experiencing symptoms of a mental health condition.</p>
                        <p className="main_para1 text-justify fw-bolder fs-3">Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.</p>
                     </div>
                  </div>
                  <Accordian />
                  <div className="container-fluid ">
                     <div className="main_block mx-sm-auto my-5 px-5  border border-1">
                        <h1 className="main_heading display-1 mb-5 fw-bolder" style={{ color: "darkcyan" }}>How does it work?</h1>
                        <p className="main_para text-justify fw-bolder fs-3">Following screening, you will be provided with information, resources and tools to help you understand and improve your mental health.</p>
                        <p className="main_para1 text-justify fs-4">Please note: Online screening tools are meant to be a quick snapshot of your mental health. If your results indicate you may be experiencing symptoms of a mental illness, consider sharing your results with someone. A mental health provider (such as a doctor or a therapist) can give you a full assessment and talk to you about options for how to feel better.</p>
                        <p className="main_para2 text-justify fs-4">If you provide us your information and are in need of support, we will do our best to respond. However, we are not a crisis support line. If you are in need of immediate assistance, please call the National Suicide Prevention Hotline at 1-800-273-TALK, or text “MHA” to 741-741 to talk to a trained counselor from the Crisis Text Line. Warmlines are also an excellent place for support.</p>
                        <p className="main_para3 text-justify fs-4">For all other screening-related questions and non-emergency support, please contact screening@mhanational.org.</p>
                        <p className="main_para4 text-justify fs-4">Mental Health America Inc., sponsors, partners, and advertisers disclaim any liability, loss, or risk incurred as a consequence, directly or indirectly, from the use and application of these screens.</p>
                     </div>
                  </div>
               </div>

               <div className="col-8 mx-auto">
                  <div className="container-fluid ">
                     <div className="main_block1 mx-sm-auto my-5 px-5  border border-1">
                        <h1 className="main_heading text-center display-1 mb-5 fw-bolder" style={{ color: "maroon" }}>Work Health Survey</h1>
                        <p className="main_para text-justify fs-3" style={{ color: "darkmagenta" }}>This is a not a mental health screening but a survey meant to help us identify strategies to help companies do better. The survey is updated annually.</p>
                        <h2 className="main_button text-center w-75 mx-auto border border-1 rounded-pill mt-5 pt-3 pb-3 fs-2" to="/depression">TAKE THE WORK HEALTH SURVEY</h2>
                     </div>
                     <p className="data text-justify fs-4">MHA Screening is made possible through the generous contributions of individuals and organizations that share our vision of mental health for all. This program is supported, in part, through philanthropic contributions from Abbvie, Alkermes, The Anthem Foundation, The Faas Foundation, Janssen, Neurocrine Biosciences, The NFL Foundation, Sage Therapeutics, Takeda Lundbeck Alliance, and Teva.

                     </p>
                  </div>
               </div>
               
            </div>
         </div>
      </>
   )
}

export default Home;