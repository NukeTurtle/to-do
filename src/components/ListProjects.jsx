import Projects from "../data/projects.json"
import React from "react";

const ListProjects = () => {
    return (
        // DOM output
        <>
            {Projects && Projects.map(({ project }) => (
                <div className="btn">
                    <div className="projectName">
                        <div>
                            {project}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListProjects;