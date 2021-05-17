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
        <div class="outer">
            <div class="header">
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Галерея</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <div class="inner">
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
            <div class="footer">

                <p>this footer</p>
            </div>

        </div>
    )
}


export default UserList