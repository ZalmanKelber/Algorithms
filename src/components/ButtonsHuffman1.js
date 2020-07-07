import React from "react";
import { connect } from "react-redux";

import { changePhase } from "../utils/changeStore/changeBasicInfo";
import changeInput from "../utils/changeStore/changeInput";

//displayed on opening the huffman page
const ButtonsHuffman1 = props => {

    return (
        <div className="conditional-content">
            <div className="step-display">
                Step 1: Enter input:
            </div>
            <form className="button-row ui form">
                <span className="button-row-label" >enter input (case insensitive, only letters and spaces)</span>
                <br />
                <input type="text" onChange={e => changeInput(e.target.value)} value={props.input} />
            </form>
            <div className="button-row">
                <span className="button-row-label" >start algorithm:</span>
                <br />
                <button onClick={() => props.input && changePhase("heapifying")} className="ui button primary">Continue</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    // console.log("mapStateToProps:", state.data.huffman);
    return {
        input: state.data.huffman.input
    }
}

export default connect(mapStateToProps)(ButtonsHuffman1);