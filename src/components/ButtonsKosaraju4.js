import React from "react";

import { changePhase } from "../utils/changeStore/changeBasicInfo";

const ButtonsKosaraju4 = () => {
    return (
        <div className="conditional-content">
            <div className="step-display">
                Step 4: Unreverse
            </div>
            <div className="button-row">
                <button onClick={() => changePhase("solving")} className={"ui button primary"}>Uneverse</button>
            </div>
        </div>
    );
}

export default ButtonsKosaraju4;