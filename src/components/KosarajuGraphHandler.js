import React from "react";
import P5Wrapper from 'react-p5-wrapper';
import { connect } from "react-redux";
import kosarajuGraphSketch from '../sketches/kosarajuGraphSketch';

class KosarajuGraphHandler extends React.Component {  
    render() {
        return (
            <P5Wrapper 
                sketch={kosarajuGraphSketch} 
                vertices={this.props.vertices}
                edges={this.props.edges}
                editGraph={this.props.editGraph}
                phase={this.props.phase}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        edges: [ ...state.data.kosaraju.edges ],
        vertices: [ ...state.data.kosaraju.vertices ],
        editGraph: state.editGraph,
        phase: state.phase
    }
}

export default connect(mapStateToProps)(KosarajuGraphHandler);