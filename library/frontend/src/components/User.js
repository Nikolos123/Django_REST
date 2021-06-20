import React from 'react'


const UserItem = ({user}) => {
    return (
        <tr>
            <td class="Line">
                {user.username}
            </td>
            <td class="Line">
                {user.first_name}
            </td>
            <td class="Line">
                {user.last_name}
            </td>
            <td class="Line">
                {user.email}
            </td>

        </tr>
    )
}
const UserList = ({users}) => {
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
                        User name
                    </th>
                    <th>
                        First name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Email
                    </th>
                    {users.map((user) => <UserItem user={user}/>)}
                </table>
            </div>
        <footer class="footer">
            2021 CopyRight &copy;
        </footer>
        </body>
    )
}


export default UserList