import { projects } from "../data/projects.js"

const ListTodos = () => {
    return (
        // DOM output
        <>
            <div>
                {projects.map((project) => (
                    <div key={project.id}>
                        <ul className="todoItem">
                            {project.projectTodos.map((todo) => (
                                <li key={todo.id}>
                                    <div className="todoLeft">
                                        <div className="todoTitle">
                                            {todo.todoTitle}
                                        </div>
                                        <div className="todoDescription">
                                            {todo.todoDescription}
                                        </div>
                                    </div>
                                    <div className="todoRight">
                                        {project.projectDate}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListTodos;