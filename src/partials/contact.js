// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";
import About from "../pages/about";
import ProjectsMenu from "./projects";
import Symara from "./symara";
import Contact from "../pages/contact";

const ContactMenu = (props) => {
    
    

    return (
            <div onClick={() => 
                { props.handleCallBack(<div className="navigation-menu">
                <Symara handleCallBack={props.handleCallBack} /><ProjectsMenu handleCallBack={props.handleCallBack} /><Contact /></div>);
                props.menuTransition(props.bigger, props.small, props.small2)  }} className="contact-menu">
                <h1>C</h1>
                <h1>O</h1>
                <h1>N</h1>
                <h1>T</h1>
                <h1>A</h1>
                <h1>C</h1>
                <h1>T</h1>
            </div>    
        
        )
    }

export default ContactMenu;