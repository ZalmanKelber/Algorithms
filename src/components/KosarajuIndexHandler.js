import React from "react";
import P5Wrapper from 'react-p5-wrapper';
import { connect } from "react-redux";
import kosarajuIndexSketch from '../sketches/kosarajuIndexSketch';

class KosarajuIndexHandler extends React.Component {   
    render() {
        return (
            <P5Wrapper 
                sketch={kosarajuIndexSketch} 
                vertices={this.props.vertices}
                vertexIndex={this.props.vertexIndex}
                phase={this.props.phase}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        vertexIndex: [ ...state.data.kosaraju.vertexIndex ],
        vertices: [...state.data.kosaraju.vertices],
        phase: state.phase
    }
}

export default connect(mapStateToProps)(KosarajuIndexHandler);