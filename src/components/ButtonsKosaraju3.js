import React from "react";

import { store } from "../index";
import nextDepthFirstSearchStep from "../utils/changeStore/nextDepthFirstSearchStep";


const ButtonsKosaraju3 = () => {
    //runs next step of the algorithm each interval and stops when phase changes
    const nextStepHandler = () => {
        const handler = setInterval(() => {
            console.log("iterating");
            const phase = store.getState().phase;
            if (phase !== "depthFirstSearch") {
                clearInterval(handler);
            }
            else {
                nextDepthFirstSearchStep();
            }
        }, 100);
    }

    return (
        <div className="conditional-content">
            <div className="step-display">
                Step 3: Run depth-first search and order the found vertices
            </div>
            <div className="button-row">
                <button onClick={() => nextDepthFirstSearchStep()} className={"ui button primary"}>Next search step</button>
                <button onClick={nextStepHandler} className={"ui button primary"}>Run search</button>
            </div>
        </div>
    );
}

export default ButtonsKosaraju3;