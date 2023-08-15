// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";

const About = () => {

    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/about?populate=*`)
    const [backgroud, setBackground] = useState(' ');

    let about = [];
    let image = [];

    if (data) {
        about = data.data.attributes
        image = data.data.attributes.Background_Image.data[0].attributes.url
        console.log(image)
        // style={{backgroundImage: about.Background_Image}}
        return (
            <div className="about-wrapper" style={{backgroundImage: `url(http://localhost:1337${image})`}}>
               <h1>{about.Name}</h1>
               <p>{about.Bio}</p>
               <p>{about.Artist_Statement}</p>
            </div>                  
        )
    }
    
}

export default About;