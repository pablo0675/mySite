import React from 'react';
import "../pages/Github.css";
import logo from "../assets/github.svg";

const Github: React.FC = () => {
    return (
        <div className="github">
            <header className="Github-header">
                <img src={logo} className="Github-logo" alt="logo" />
                <a
                    className="Github-link"
                    href="https://github.com/pablo0675"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    my dumb fuck projects
                </a>
            </header>
        </div>);
};

export default Github;