import React from "react";

import { store } from "../index";
import nextKosarajuStep from "../utils/changeStore/nextKosarajuStep";


const ButtonsKosaraju5 = () => {
    //runs next step of the algorithm each interval and stops when phase changes
    const nextStepHandler = () => {
        const handler = setInterval(() => {
            console.log("iterating");
            const phase = store.getState().phase;
            if (phase !== "solving") {
                clearInterval(handler);
            }
            else {
                nextKosarajuStep();
            }
        }, 100);
    }

    return (
        <div className="conditional-content">
            <div className="step-display">
                Step 5: Run algorithm
            </div>
            <div className="button-row">
                <button onClick={() => nextKosarajuStep()} className={"ui button primary"}>Next algorithm step</button>
                <button onClick={nextStepHandler} className={"ui button primary"}>Run algorithm</button>
            </div>
        </div>
    );
}

export default ButtonsKosaraju5;