import React from 'react'

import {Link} from 'react-router-dom';


const ProjectItem = ({project}) => {
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

        </tr>
    )
}
const ProjectList = ({projects}) => {
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
                {projects.map((project) => <ProjectItem project={project}/>)}
            </table>
        </div>
        <footer class="footer">
            2021 CopyRight &copy;
        </footer>
        </body>
    )
}


export default ProjectList