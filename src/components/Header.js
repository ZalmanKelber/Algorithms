import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                Algorithm Visualizer
            </div>
            <div className="menu-items">
                <div className="menu-link">
                    <Link to="/">Home</Link>
                </div>
                <div className="menu-link">
                    <Link to="/kruskal">Kruskal</Link>
                </div>
                <div className="menu-link">
                    <Link to="/kosaraju">Kosaraju</Link>
                </div>
                <div className="menu-link">
                    <Link to="/huffman">Huffman</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;