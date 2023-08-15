// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";

const About = () => {

    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/about`)

    let about = []
    
    if (data) {
        about = data.data

        return (
            <div className="">
               <h1>Hello World!</h1>
            </div>                  
        )
    }
    
}

export default About;