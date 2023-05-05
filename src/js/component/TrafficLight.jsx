import React, { useState } from "react";

const TrafficLight = () => {

    const [light, setLight] = useState("")




    return (
        <>
        <div>
            <div className="case">
                <span className={light === "green" ? "dot1Lighted" : "dot1"} onClick={() => {
                    light == "green" ? setLight("") : setLight("green")}}></span>
                <span className={light === "yellow" ? "dot2Lighted" : "dot2"} onClick={() => {
                    light == "yellow" ? setLight("") : setLight("yellow")}}></span>
                <span className={light === "red"? "dot3Lighted" : "dot3"} onClick={() => {
                    light == "red" ? setLight("") :  setLight("red")}}></span>
            </div>
        </div>
        
        </>
    )
}

export default TrafficLight