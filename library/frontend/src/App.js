import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import UserList from "./components/User";
import ProjectList from "./components/Project.js";
import TodoList from "./components/Todo.js";

import {HashRouter, BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom';

const NotFound404 = ({location}) => {
    return (
        <div>
            Not found: {location.pathname}
        </div>
    )
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'todos': [],
            'projects': []
        }
    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/api/user').then(response => {
            const users = response.data
            this.setState(
                {
                    'users': users,
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo').then(response => {
            const todos = response.data
            this.setState(
                {
                    'todos': todos,
                })
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/project').then(response => {
            const projects = response.data
            this.setState(
                {
                    'projects': projects,

                }
            )
        }).catch(error => console.log(error))


    }

    render() {
        return (
            <div>
                <HashRouter>
                    <nav class="header">
                        <ul>
                            <li>
                                <Link to='/'>Пользователи</Link>
                            </li>
                            <li>
                                <Link to='/projects'>Проекты</Link>
                            </li>
                            <li>
                                <Link to='/todos'>TodoList</Link>
                            </li>
                        </ul>
                    </nav>


                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
                        {/*<Route exact path='/' component = {() => <UserList users={this.state.users} />} />*/}


                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/todos' component={() => <TodoList todos={this.state.todos}/>}/>
                        {/*<Route exact path='/books' component = {() => <BookList books={this.state.books} />} />*/}
                        {/*<Route exact path='/author/:id' component = {() => <AuthorPage authors={this.state.authors} />} />*/}
                        {/*<Redirect from='/authors' to='/' />*/}
                        <Redirect from='/users' to='/'/>
                        <Route component={NotFound404}/>
                    </Switch>
                </HashRouter>

                {/*<UserList users={this.state.users}/>*/}
                {/*<TodoList todos={this.state.todos}/>*/}
            </div>
        )
    }
}


export default App;