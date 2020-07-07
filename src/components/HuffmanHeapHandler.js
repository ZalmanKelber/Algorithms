import React from "react";
import P5Wrapper from 'react-p5-wrapper';
import { connect } from "react-redux";
import huffmanHeapSketch from '../sketches/huffmanHeapSketch';

class HuffmanHeapHandler extends React.Component {
    
    render() {
        return (
            <P5Wrapper 
                sketch={huffmanHeapSketch} 
                heap={this.props.heap}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        heap: { ...state.data.huffman.heapTree },
    }
}

export default connect(mapStateToProps)(HuffmanHeapHandler);