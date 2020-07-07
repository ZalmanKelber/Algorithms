import React from "react";
import { connect } from "react-redux";

class HuffmanChartHandler extends React.Component {

    state = {
        totalBits: 0
    }

    //computes the new total bits to display when store.data.huffman.chart changes
    componentDidUpdate = (newProps) => {
        let newTotalBits = 0;
        newProps.chart.forEach(row => {
            newTotalBits += row.freq * row.code.length;
        });
        if (newTotalBits !== this.state.totalBits) {
            this.setState({totalBits: newTotalBits});
        }
    }
    render() {
        return (
            <div>
                <strong>TOTAL BITS: {this.state.totalBits}</strong>
                <table class="ui celled table">
                <thead>
                    <tr><th>Character</th>
                    <th>Frequency</th>
                    <th>Bit-code</th>
                </tr></thead>
                <tbody>
                    {this.props.chart.map(row => {
                        return (
                            <tr>
                                <td>{row.char}</td>
                                <td>{row.freq}</td>
                                <td>{row.code}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {chart: [ ...state.data.huffman.chart ]};
}

export default connect(mapStateToProps)(HuffmanChartHandler);