import React from 'react'


const ToDotItem = ({todo}) => {
    return (
        <tr>
            <td class="Line">
                {todo.project}
            </td>
            <td class="Line">
                {todo.comment}
            </td>
            <td class="Line">
                {todo.create}
            </td>
            <td class="Line">
                {todo.update}
            </td>
            <td className="Line">
                {todo.user}
            </td>
            <td className="Line">
                {todo.active}
            </td>

        </tr>
    )
}
const TodoList = ({todos}) => {
    return (

        <body>
        <header class="header">
            {/*<ul>*/}
            {/*        <li><a href="#">Пользователи</a></li>*/}
            {/*        <li><a href="#">Проекты</a></li>*/}
            {/*        <li><a href="#">ToDo list</a></li>*/}
            {/*    </ul>*/}
        </header>
        <div>
            <table class="Table">
                <th>
                    ID_Проект
                </th>
                <th>
                    Комментарий
                </th>
                <th>
                    Дата создания
                </th>
                <th>
                    Дата обновления
                </th>
                <th>
                    ID_Пользователя
                </th>
                <th>
                    Статус
                </th>
                {todos.map((todo) => <ToDotItem todo={todo}/>)}
            </table>
        </div>
        <footer class="footer">
            2021 CopyRight &copy;
        </footer>
        </body>
    )
}


export default TodoList