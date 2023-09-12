// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";
import Symara from "./symara";
import ContactMenu from "./contact";
import ProjectsView from "../pages/projectsView";

const ProjectsMenu = (props) => {

    return (
            <div onClick={() => { props.handleCallBack(<div className="navigation-menu">
                <Symara handleCallBack={props.handleCallBack} /><ProjectsView /><ContactMenu handleCallBack={props.handleCallBack}/></div>);
                props.menuTransition(props.bigger, props.small, props.small2) }
                } className="projects-menu">
                <h1>P</h1>
                <h1>R</h1>
                <h1>O</h1>
                <h1>J</h1>
                <h1>E</h1>
                <h1>C</h1>
                <h1>T</h1>
                <h1>S</h1>
            </div>       
                
        )
    }

export default ProjectsMenu;