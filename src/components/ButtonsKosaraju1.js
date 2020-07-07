import React from "react";
import { connect } from "react-redux";


import changeInput from "../utils/changeStore/changeInput";
import { changeEditGraph } from "../utils/changeStore/editInput";
import { changePhase } from "../utils/changeStore/changeBasicInfo";

import KosarajuForm from "./KosarajuForm";

//buttons displayed on opening Kosaraju page
const ButtonsKosaraju1 = props => {

    //regulates whether the modal form is displayed for adding edge input
    const [displayForm, setDisplayForm] = React.useState(false);

    const hideForm = () => {
        setDisplayForm(false);
    }

    //renders instructions based on edit graph options the user has selected
    const renderText = () => {
        switch (true) {
            case props.editGraph.dragVertex:
                return "(click and drag vertices to change their position)";
            case props.editGraph.addVertex:
                return "(click on the canvas to add a vertex)";
            case props.editGraph.deleteVertex:
                return "(click on vertices to remove them)";
            case props.editGraph.deleteEdge:
                return "(click on two vertices to remove the connecting edge)"
            default:
                return "";
        }
    }

    return (
        <div className="conditional-content">
            {displayForm && <KosarajuForm hideForm ={hideForm}/>}
            <div className="step-display">
                Step 1: Edit Graph
            </div>
            <div className="button-row">
                <span className="button-row-label" >choose input:</span>
                <br />
                <button onClick={() => changeInput("small")} className={`ui button primary ${props.input === "small" && "selected"}`}>Small Input</button>
                <button onClick={() => changeInput("large")} className={`ui button primary ${props.input === "large" && "selected"}`}>Large Input</button>
            </div>
            <div className="button-row">
                <span className="button-row-label" >edit:</span>
                <br />
                <button onClick={() => changeEditGraph("dragVertex")} className={`ui button primary ${props.editGraph.dragVertex && "selected"}`}>Move Vertices</button>
                <button onClick={() => changeEditGraph("addVertex")} className={`ui button primary ${props.editGraph.addVertex && "selected"}`}>Add Vertices</button>
                <button onClick={() => changeEditGraph("deleteVertex")} className={`ui button primary ${props.editGraph.deleteVertex && "selected"}`}>Delete Vertices</button>
                <button onClick={() => setDisplayForm(true)} className="ui button primary">Add Edges</button>
                <button onClick={() => changeEditGraph("deleteEdge")} className={`ui button primary ${props.editGraph.deleteEdge && "selected"}`}>Delete Edges</button>
            </div>
            <div className="button-row">
                <span className="button-row-label" >start algorithm:</span>
                <br />
                <button onClick={() => changePhase("readyToReverse")} className="ui button primary">Begin</button>
            </div>
            <div className="message-display">
                {renderText()}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        editGraph: state.editGraph,
        input: state.data.kosaraju.input,
    }
}

export default connect(mapStateToProps)(ButtonsKosaraju1);
