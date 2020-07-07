import React from "react";

import { store } from "../index";
import nextHeapifyStep from "../utils/changeStore/nextHeapifyStep";


const ButtonsHuffman2 = () => {

    //runs next step of the algorithm each interval and stops when phase changes
    const nextStepHandler = () => {
        const handler = setInterval(() => {
            const phase = store.getState().phase;
            if (phase !== "heapifying") {
                clearInterval(handler);
            }
            else {
                nextHeapifyStep();
            }
        }, 100);
    }

    return (
        <div className="conditional-content">
            <div className="step-display">
                Step 2: Heapify
            </div>
            <div className="button-row">
                <button onClick={() => nextHeapifyStep()} className={"ui button primary"}>Next heapify step</button>
                <button onClick={nextStepHandler} className={"ui button primary"}>Run heapify</button>
            </div>
        </div>
    );
}

export default ButtonsHuffman2;