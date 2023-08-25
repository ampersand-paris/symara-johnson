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

const Navigation = () => {

    const [flex, setFlex] = useState('flex-end');
    const [order, setOrder] = useState(<div className="navigation-menu" style={{ justifyContent: flex }}>
    <About /><ProjectsMenu ContactMenu handleCallBack={callBack}/><ContactMenu handleCallBack={callBack} /></div>);

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