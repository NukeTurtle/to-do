import ListProjects from "../components/ListProjects";
import { projects } from "../data/projects.js"

const Projects = () => {
    return (
    <ListProjects>
        {projects && projects.map(({ projectName, id }) => (
                <div className="projectName" key={id}>
                    <div className="btn">
                        {projectName}
                    </div>
                </div>
            ))}
    </ListProjects>
    )
  };
  
  export default Projects;