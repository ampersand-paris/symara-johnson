// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";
import ContactMenu from "./contact";
import ProjectsMenu from "./projects";
import Symara from "./symara";
import About from "../pages/about";
import Footer from "./footer";
import ProjectsView from "../pages/projectsView";
import Contact from "../pages/contact";

const Navigation = (props) => {

    const [flex, setFlex] = useState('space-between');
    const [order, setOrder] = useState(props.order);

    function callBack(arg) {
        setOrder(arg)
    }


    return (
        <>        
            <div className="navigation-menu" style={{ justifyContent: flex }}>
                {order}
            </div>  
            <Footer />   
        </>
             
        )
    }

export default Navigation;