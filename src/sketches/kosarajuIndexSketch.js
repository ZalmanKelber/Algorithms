import drawVertices from "../utils/sketchFunctions/drawVerticesKosarajuIndex";
import SketchVertex from "../utils/dataClasses/SketchVertex";

const DIAM = 20;

export default function kosarajuGraphSketch(p){
    let draw = false;
    let canvasWidth = 1000;
    let canvasHeight = 50;
    let vertices = [];
    let vertexIndex = [];
    let responsiveVertices = [];
    let phase = "notStarted";

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
          vertices = newProps.vertices;
          vertexIndex = newProps.vertexIndex;
          phase = newProps.phase;
          responsiveVertices = getResponsiveVerticesKosarajuIndex(canvasWidth, canvasHeight, vertices, vertexIndex);
          draw = true;
      }

    
    p.setup = () => {
        p.createCanvas(canvasWidth, canvasHeight);
        p.noStroke();
    }



    p.draw = () => {
        if (draw) {
            p.background("black");
            const defaultColor = (phase === "notStarted" || phase === "readyToReverse") ? 255 : 63;
            drawVertices(p, vertices, responsiveVertices, DIAM, defaultColor);
            draw = false;
        }
    }
}

function getResponsiveVerticesKosarajuIndex(width, height, vertices, vertexIndex) {

    const responsiveVertices = [];
    for (let i = 0; i < vertexIndex.length; i++) {
        const newResponsiveVertex = new SketchVertex((i + 0.5) * width / vertices.length, height / 2, 0, vertexIndex[i]);
        responsiveVertices.push(newResponsiveVertex);
    }
    return responsiveVertices;
}