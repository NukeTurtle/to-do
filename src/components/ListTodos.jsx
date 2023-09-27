import { format, isToday } from 'date-fns'
import { projects } from "../data/projects.js";

// {isToday(project.projectDate) ? project.projectDate = "Today" : format(new Date(project.projectDate), "do MMM Y") }

// function formatDate() {
//     if(project.projectDate === isToday(project.projectDate)) {console.log("HIHI")

// }


const ListTodos = () => {
    return (
        <>
            {projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.projectName}</h3>
                    <ul className="todoItem">
                        {project.projectTodos.map((todo) => (
                            <li key={todo.id} className={todo.todoPriority}>
                                <div className="todoLeft">
                                    <div className="todoTitle">
                                        {todo.todoTitle}
                                    </div>
                                    <div className="todoDescription">
                                        {todo.todoDescription}
                                    </div>
                                </div>
                                <div className="todoRight">
                                {format(new Date(project.projectDate), "do MMM Y")}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}

export default ListTodos;