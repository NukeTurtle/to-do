import { projects } from "../data/projects.js"

const ListProjects = () => {
    return (
        <>
            {projects && projects.map(({ projectName, id }) => (
                <div className="projectName" key={id}>
                    <div className="btn">
                        {projectName}
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListProjects;