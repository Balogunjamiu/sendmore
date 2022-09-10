import React from "react";
import "./loading.css";
import Lottie from 'lottie-react';
import deliveryman from '../../../../assets/Lotties/animated-delivery-man.json'
export default function Loading() {
  return (

    <Lottie style={{backgroundColor:'black'}} animationData={deliveryman} loop={true} />
    // <div className="centerContent" style={{backgroundColor:'white'}}>
    //   <div className="sk-circle">
    //     <div className="sk-circle1 sk-child"></div>
    //     <div className="sk-circle2 sk-child"></div>
    //     <div className="sk-circle3 sk-child"></div>
    //     <div className="sk-circle4 sk-child"></div>
    //     <div className="sk-circle5 sk-child"></div>
    //     <div className="sk-circle6 sk-child"></div>
    //     <div className="sk-circle7 sk-child"></div>
    //     <div className="sk-circle8 sk-child"></div>
    //     <div className="sk-circle9 sk-child"></div>
    //     <div className="sk-circle10 sk-child"></div>
    //     <div className="sk-circle11 sk-child"></div>
    //     <div className="sk-circle12 sk-child"></div>
    //   </div>
    // </div>
  );
}
