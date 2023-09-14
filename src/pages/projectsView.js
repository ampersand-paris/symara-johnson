// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ReachMarkdown from 'react-markdown';

// Components
import useFetch from "../useFetch";
import Footer from "../partials/footer";

const ProjectsView = () => {

    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/projects?populate=*`)

    let projects = [];

    if (data) {

        projects = data.data
        console.log(projects)

        return (
            <div className="projects-wrapper">
                {projects.map((project) => 
                    <div className="project">
                        <div className="image-wrapper" style={{backgroundImage:`url(${project.attributes.Project_Image.data[0].attributes.url})`}}>
                            <div className="title-year-container">
                                <h1>{project.attributes.Title}</h1>
                                <h2>({project.attributes.Year})</h2>
                                <a className="watch" href={project.attributes.Video_Link} target="_blank"><h1 >WATCH</h1></a>
                            </div>
                        </div>
                        <div className="project-information">
                            <div className="description-premier-container">
                                <h3>{project.attributes.Premiere_Location}</h3>
                                <ReachMarkdown>{project.attributes.Presentation_Locations}</ReachMarkdown>
                                <p>{project.attributes.Description}</p>
                            </div>
                            <div className="credits-container">
                                {Object.entries(project.attributes.Credits).map((key) => 
                                    <div>
                                        <h4>{key[0]} <span className="creditee">{key[1]}</span></h4>
                                    </div>
                                )}
                            </div>
                        </div>
                            <div>
                                { project.attributes.press.data.length > 0 ? 
                                    <div className="press-container">
                                        <h1>Press</h1>
                                        <div className="project-list">
                                        { project.attributes.press.data.map((press) => 
                                        <a className="press-card" href={press.attributes.Link} target="_blank">
                                                    <h2 className="press-title">{press.attributes.Title}</h2>
                                                    <p>{press.attributes.Quote}</p>
                                                    <div className="press-details">
                                                        <h3>{press.attributes.Year}</h3>
                                                        <h3>{press.attributes.Publication}</h3>
                                                        <h3>{press.attributes.Author}</h3>
                                                    </div>
                                            </a>
                                        )}
                                    </div>
                                </div>
                                 : <div></div>}
                            </div>
                        <div className="red-bar">
                        </div>
                    </div>
                )}
            <Footer />
            </div>                  
        )
    }
    
}

export default ProjectsView;