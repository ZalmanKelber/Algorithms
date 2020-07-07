import drawEdges from "../utils/sketchFunctions/drawEdgesKosaraju";
import drawVertices from "../utils/sketchFunctions/drawVerticesKosarajuGraph";
import SketchVertex from "../utils/dataClasses/SketchVertex";

import { addVertex, deleteEdgeHandler, deleteVertex, changeVertex } from "../utils/changeStore/editInput";

const DIAM = 20;

export default function kosarajuGraphSketch(p){
    let draw = false;
    let canvasWidth = 1000;
    let canvasHeight = 450;
    let edges = [];
    let vertices = [];
    let editGraph = {};
    let responsiveVertices = [];
    let selectedIndex = null;
    let phase = "notStarted";
    const deleteEdge = deleteEdgeHandler();

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
          edges = newProps.edges;
          vertices = newProps.vertices;
          editGraph = newProps.editGraph;
          phase = newProps.phase;
          responsiveVertices = getResponsiveVerticesKosaraju(canvasWidth, canvasHeight, vertices);
          draw = true;
      }

    
    p.setup = () => {
        p.createCanvas(canvasWidth, canvasHeight);
        p.noStroke();
    }



    p.draw = () => {
        if (draw) {
            p.background("black");
            const reverse = (phase === "depthFirstSearch" || phase === "readyToUnreverse")
            const defaultColor = (phase === "notStarted" || phase === "readyToReverse") ? 255 : 63;
            drawEdges(p, edges, vertices, DIAM, defaultColor, reverse);
            drawVertices(p, vertices, responsiveVertices, DIAM, defaultColor);
            draw = false;
        }
    }
    //assigns the selectedIndex variable to any vertex whose display was clicked
    p.mousePressed = () => {
        if (editGraph.dragVertex) {
            responsiveVertices.forEach(vertex => {
                const vertexData = vertex.sendData(p, DIAM);
                if (vertexData) {
                    selectedIndex = vertexData.index;
                }
            });
        }
    }

    //determines if vertex was clicked and in which ways the graph is being edited
    p.mouseClicked = () => {
        if (editGraph.addVertex) {
            if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
                addVertex(p.mouseX / p.width, p.mouseY / p.height);
            }
        }
        else {
            responsiveVertices.forEach(vertex => {
                const vertexData = vertex.sendData(p, DIAM);
                if (vertexData) {
                    if (editGraph.deleteVertex) {
                        deleteVertex(vertexData.index);
                    }
                    if (editGraph.deleteEdge) {
                        deleteEdge(vertexData.index);
                    }
                }
            });
        }
    }

    p.mouseDragged = () => {
        if ((selectedIndex || selectedIndex === 0) && editGraph.dragVertex && p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
            changeVertex(selectedIndex, p.mouseX / p.width, p.mouseY / p.height)
        }
    }

    p.mouseReleased = () => {
        selectedIndex = null;
    }
}

//adds input vertices to an array of custom objects with methods that return vertex data when the display is clicked
function getResponsiveVerticesKosaraju(width, height, vertices) {
    const responsiveVertices = [];
    vertices.forEach((vertex, index) => {
        const newResponsiveVertex = new SketchVertex(vertex.x * width, vertex.y * height, 0, index);
        responsiveVertices.push(newResponsiveVertex);
    });
    return responsiveVertices;
}