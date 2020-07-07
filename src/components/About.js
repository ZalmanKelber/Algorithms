import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import "./About.css";

class About extends React.Component {

    //renderText displays the explanation text for each algorithm depending on which page the About page has been accessed from 
    renderText() {
        switch (this.props.selectedAlgorithmType) {
            case "kruskal":
                return (
                    <div>
                        <h2>Kruskal's algorithm</h2>
                        <p>
                        Kruskal’s algorithm computes the minimum spanning tree (or, rather, a minimum spanning tree) for a weighted undirected graph.  In simpler terms, a weighted undirected graph is a set of points or vertices connected by a set of edges, each with an associated cost.  On the graph below, the vertices are displayed as circles and indexed numerically.  The edges are sized both according to the distance between the points they connect (the greater the distance, the thinner the edge) as well to their cost (the lower the cost, the wider the edge, so that a wider edge indicates greater connectivity between two vertices).  A minimum spanning tree is a subset of the set of edges that connect all vertices with a minimized total cost.
                        </p>
                        <p>
                        Kruskal’s algorithm begins by taking all of the edges on the graph and sorting them by cost.  Then, beginning with the lowest cost edge and proceeding one by one, it attempts to add each edge back to the graph but only does so if there are no cycles.  In order to check for cycles, the algorithm either runs a depth-first-search on the vertices connected by the edge being tested or else it employs a more efficient Union-Find data structure in which the vertices keep track of which other vertices they are already connected to (represented in the below display by colors).
                        </p>
                    </div>
                );
            case "kosaraju":
                return (
                    <div>
                        <h2>Kosaraju's algorithm</h2>
                        <p>
                        The Kosaraju-Shahrir algorithm computes the Strongly Connected Components (SCC’s) of a directed, unweighted graph.  More simply put, a directed unweighted graph is a set of points or vertices connected by a set of edges that point from one vertex to another (i.e. are directionally one-way).  A Strongly Connected Component is a set of vertices that can all be reached from any other vertex by following a set of successive edges in the correct direction.
                        </p>
                        <p>
                        The algorithm begins by reversing the graph (that is, reversing the direction of every edge).  It then picks an arbitrary point on the graph and runs a depth-first search.  When a vertex is determined to have no in-neighbors (neighboring vertices pointed to by outgoing edges) that have not already been found by the depth-first search, it is added to an ordered list of vertices.  When the depth-first search finishes, the algorithm picks another unfound vertex and runs another depth-first search and continues this way until all vertices on the graph have been found and the ordered list of vertices contains every vertex.
                        </p>
                        <p>
                        Next, the algorithm unreversed the graph back to its original state and runs a new depth-first search on the last vertex to be added to the ordered list of vertices.  The depth-first search will yield an SCC.  The algorithm then finds the last unfound vertex on the ordered list and runs a depth-first search on it to find another SCC, and proceeds in this way until every vertex has been found.
                        </p>
                        <p>
                        Note that in the display below, the SCC’s are color-coded.  In order to ensure that the overall set of colors are of maximal distance from each other on the rgb cube, the program has to solve the number of SCC’s before the display is run!
                        </p>
                    </div>
                );
            default: 
                return (
                    <div>
                         <h2>Huffman's algorithm</h2>
                         <p>
                         Huffman’s algorithm assigns an encoding key to a string of text in order to compress it into a string of bits of minimal length.  When a string of text is entered into the input field below, the first tree in the display shows the arbitrary and more or less equal length assignments for each character: the set of 0’s and 1’s that label the lines connecting the top of the tree with each individual character represents bits assigned to that character in the encoding key.
                         </p>
                        <p>
                        Huffman’a algorithm replaces the two least frequently occurring characters and replaces them on the tree with a branch representing their combined frequencies in the input string.  It then examines the set of remaining characters along with this branch to find the two least frequently occurring, and replaces them with another combined branch, proceeding this way until the result is one large branch that constitutes the new tree.
                        </p>
                        <p>
                        In order to continually find the two minimum values efficiently, the algorithm keeps track of the data in a heap structure, visualized in the second part of the display.  Minimums can be extracted from the heap and new values can be inserted in, both in logarithmic time.
                        </p>
                    </div>
                );
        }
    }

    render() {
        return (
            <div class="about-global-wrapper">
                <Header />
                <div className="about-outer-wrapper">
                    <div className="about-inner-wrapper" >
                        <div className="about-content">
                           {this.renderText()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {selectedAlgorithmType: state.selectedAlgorithm.type};
}

export default connect(mapStateToProps)(About);