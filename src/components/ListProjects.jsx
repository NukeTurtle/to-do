import { projects } from "../data/projects.js"

const ListProjects = () => {
    return (
        // DOM output
        <>
            {projects && projects.map(({ project, id }) => (
                <div className="projectName" key={id}>
                    <div className="btn">
                        {project}
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListProjects;