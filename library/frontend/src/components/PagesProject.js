import React from 'react';
import {useParams} from 'react-router-dom';



const ProjecPagestItem = ({project}) => {
    return (
        <tr>

            <td className="Line">
                {project.name}
            </td>

            <td class="Line">
                {project.id}
            </td>

        </tr>
    )
}


const ProjectPage = ({projects}) => {

    let {id} = useParams();
    let project = projects.find((project) => project.id == id);

    return (
        // <div>
        //     {project.id}
        //     {project.name}
        // </div>


    <body>
    <header className="header">

    </header>
    <div>
        <table className="Table">
            <th>
                ID_Проекта
            </th>
            <th>
                Имя
            </th>
            {projects.map((project) => <ProjecPagestItem project={project}/>)}
        </table>
    </div>
    <footer className="footer">
        2021 CopyRight &copy;
    </footer>
    </body>


)
}

export default ProjectPage;
