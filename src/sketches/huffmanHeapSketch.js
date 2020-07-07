import drawTree from "../utils/sketchFunctions/drawTree";

export default function huffmanHeapSketch(p){
    let draw = false;
    let canvasWidth = 650;
    let canvasHeight = 250;
    let heap = {}

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
          heap = newProps.heap;
          draw = true;
      }

    
    p.setup = () => {
        p.createCanvas(canvasWidth, canvasHeight);
        p.noStroke();
    }



    p.draw = () => {
        if (draw) {
            p.background("white");
            drawTree(p, heap, "heap");
            draw = false;
        }
    }
}