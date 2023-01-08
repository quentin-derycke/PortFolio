import React from "react";
import Project from "./cards/project_card";
import GreenV from '../assets/projects/GreenV.png';

const project1 =  {

    name: 'Green Village',
    src: GreenV,
    desc: 'e-Commerce Website with Symfony',
    tag1: '#e-commerce',
    tag2: '#Symfony',
   


}



class Projects extends React.Component {

    render()
    {
        return(
            <div className="flex gap-24">
            <Project name={project1.name}
            src={project1.src}
            desc={project1.desc}
            tag1={project1.tag1}
            tag2={project1.tag2}/>

            <Project name={project1.name}
            src={project1.src}
            desc={project1.desc}
            tag1={project1.tag1}
            tag2={project1.tag2}/>
            </div>
        )
    }
}





export default Projects;
