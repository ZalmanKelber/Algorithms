import React from "react";
import { callReset, changeSelectedAlgorithmType } from "../utils/changeStore/changeBasicInfo";
import changeInput from "../utils/changeStore/changeInput";

import Header from "./Header";
import UserInput from "./UserInput";
import KosarajuIndexHandler from "./KosarajuIndexHandler";
import KosarajuGraphHandler from "./KosarajuGraphHandler";

class Kosaraju extends React.Component {
    componentDidMount() {
        //resets the redux store when page is accessed
        callReset();
        changeSelectedAlgorithmType("kosaraju");
        changeInput("small")
    }
    render() {
        return (
            <div>
                <Header />
                <UserInput />
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{backgroundColor: "black"}}>
                        <div style={{display: "flex", justifyContent: "center", margin: "0"}}>
                            <KosarajuIndexHandler />
                        </div>
                        <div style={{display: "flex", justifyContent: "center", margin: "0"}}>
                            <KosarajuGraphHandler />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Kosaraju;