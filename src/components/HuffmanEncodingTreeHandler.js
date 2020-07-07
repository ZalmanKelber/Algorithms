import React from "react";
import P5Wrapper from 'react-p5-wrapper';
import { connect } from "react-redux";
import huffmanEncodingTreeSketch from '../sketches/huffmanEncodingTreeSketch';

class HuffmanEncodingTreeHandler extends React.Component {
    render() {
        return (
            <P5Wrapper 
                sketch={huffmanEncodingTreeSketch} 
                encodingTree={this.props.encodingTree}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        encodingTree: { ...state.data.huffman.encodingTree },
    }
}

export default connect(mapStateToProps)(HuffmanEncodingTreeHandler);