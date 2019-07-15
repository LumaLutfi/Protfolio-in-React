import React from 'react';
import {ProjectsList} from "./data/projects";
import './css/Projects.css';
import { Link } from 'react-router-dom';
import Background from './img/Screen Shot 2019-03-14 at 9.36.22 PM.png';


const Projects = (props) =>{
    let project = ProjectsList.map((work) =>{
        return (
            <div className="project-container">
                <a>
                    <div className="project-image" 
                    style={{backgroundImage: "url(" + work.img_src +")"}}></div>
                </a>
                <h3>{work.name}</h3>
            </div>
        );
    });
    return(
    <div className="main-container">
    <div><Link className="back" to="/">Back</Link></div>
    <h2>{props.title}</h2>
        <div className="container">
            {project}
        </div>
    </div>
    );
};

export default Projects;