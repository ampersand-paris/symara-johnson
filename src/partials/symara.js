// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";
import ProjectsMenu from "./projects";
import About from "../pages/about";
import ContactMenu from "./contact";

const Symara = (props) => {
    
    

    return (
        <div onClick={() => props.handleCallBack(<div className="navigation-menu">
        <About /><ProjectsMenu handleCallBack={props.handleCallBack}/><ContactMenu handleCallBack={props.handleCallBack}/></div>)} className="symara-menu">
            <h1>S</h1>
            <h1>Y</h1>
            <h1>M</h1>
            <h1>A</h1>
            <h1>R</h1>
            <h1>A</h1>
        </div>                  
        )
    }

export default Symara;