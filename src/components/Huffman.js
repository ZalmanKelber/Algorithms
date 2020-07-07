import React from "react";
import { callReset, changeSelectedAlgorithmType } from "../utils/changeStore/changeBasicInfo";

import Header from "./Header";
import UserInput from "./UserInput";
import HuffmanChartHandler from "./HuffmanChartHandler";
import HuffmanEncodingTreeHandler from "./HuffmanEncodingTreeHandler";
import HuffmanHeapHandler from "./HuffmanHeapHandler";

import "./Huffman.css";

class Huffman extends React.Component {
    componentDidMount() {
        //resets the redux store when page is accessed
        callReset();
        changeSelectedAlgorithmType("huffman");
    }
    render() {
        return (
            <div>
                <Header />
                <div className="huffman-content">
                    <div className="huffman-chart">
                        <UserInput />
                        <HuffmanChartHandler />
                    </div>
                    <div className="huffman-sketches">
                        <HuffmanEncodingTreeHandler />
                        <HuffmanHeapHandler />
                    </div>
                </div>
            </div>
        );
    }
}

export default Huffman;