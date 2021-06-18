import React from 'react'

import {Link} from 'react-router-dom';


const ProjectItem = ({project,delete_project}) => {
    return (
        <tr>

            <td class="Line">
                {project.name}
            </td>

            <td className="Line">
                <Link to = {`project/${project.id}`}> {project.id}  </Link>
            </td>

            <td class="Line">
                {project.users}
            </td>
            <td class="Line">
                {project.url}
            </td>
            <td className="Line">
                <button onClick={()=>delete_project(project.id)}> Delete </button>
            </td>

        </tr>
    )
}
const ProjectList = ({projects,delete_project}) => {
    return (

        <body>
        <header class="header">

        </header>
        <div>
            <table class="Table">
                <th>
                    Имя
                </th>
                <th>
                    ID_Проекта
                </th>
                <th>
                    ID_Пользователя
                </th>
                <th>
                    Ссылка
                </th>
                <th>
                Команда удалить
                </th>
                {projects.map((project) => <ProjectItem project={project} delete_project={delete_project}/>)}
            </table>
        </div>
        <footer class="footer">
            2021 CopyRight &copy;
        </footer>
        </body>
    )
}


export default ProjectList