import React from "react";

import { changePhase } from "../utils/changeStore/changeBasicInfo";


const ButtonsKosaraju2 = () => {
    return (
        <div className="conditional-content">
            <div className="step-display">
                Step 2: Reverse
            </div>
            <div className="button-row">
                <button onClick={() => changePhase("depthFirstSearch")} className={"ui button primary"}>Reverse</button>
            </div>
        </div>
    );
}

export default ButtonsKosaraju2;