import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./Home";
import Kruskal from "./Kruskal";
import Kosaraju from "./Kosaraju";
import Huffman from "./Huffman";
import About from "./About";

const App = () => {

    return (
        <HashRouter>
            <Route path="/" exact component={Home} />
            <Route path="/kruskal" exact component={Kruskal} />
            <Route path="/kosaraju" exact component={Kosaraju} />
            <Route path="/huffman" exact component={Huffman} />
            <Route path="/about" exact component={About} />
        </HashRouter>
    );
}

export default App;