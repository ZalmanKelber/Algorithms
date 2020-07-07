import drawTree from "../utils/sketchFunctions/drawTree";

export default function huffmanEncodingTreeSketch(p){
    let draw = false;
    let canvasWidth = 650;
    let canvasHeight = 350;
    let encodingTree = {}

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
          encodingTree = newProps.encodingTree;
          draw = true;
      }

    p.setup = () => {
        p.createCanvas(canvasWidth, canvasHeight);
        p.noStroke();
    }

    p.draw = () => {
        if (draw) {
            p.background("white");
            drawTree(p, encodingTree, "encodingTree");
            draw = false;
        }
    }
}