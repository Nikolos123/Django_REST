import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import UserList from "./components/User";
import ProjectList from "./components/Project.js";
import TodoList from "./components/Todo.js";
import ProjectPage from "./components/PagesProject.js";
import LoginForm from "./components/Auth.js";



import {HashRouter, Route, Redirect, Switch, Link} from 'react-router-dom';


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
         let token = localStorage.getItem('token');
        this.state = {
            'users': [],
            'todos': [],
            'projects': [],
            'token': '',
        }
    }


    restore_token() {
       let token = localStorage.getItem('token');

       this.setState(
           {
               'token': token
           },this.load_data
       );
    }

    create_header() {
       if (!this.is_auth())
           return {};

       return {
            'Authorization': 'Token ' + this.state.token
       }
    }

     load_data() {
        let headers = this.create_header();

    // componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/user/',{headers}).then(response => {
            const users = response.data
            this.setState(
                {
                    'users': users,
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/',{headers}).then(response => {
            const todos = response.data
            this.setState(
                {
                    'todos': todos,
                })
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/project/',{headers}).then(response => {
            const projects = response.data
            this.setState(
                {
                    'projects': projects,

                }
            )
        }).catch(error => console.log(error))
 }



    componentDidMount() {
        this.restore_token();
        // this.load_data();
    }

    is_auth() {

        return !!(this.state.token);
    }

    logout() {
           this.setState(
               {
                   'token': ''
               },this.load_data
           );
    }

    get_token(login, password) {
       axios.post(
            'http://127.0.0.1:8000/api-token-auth/',
            {"username": login, "password": password}
       )
       .then(response => {
           this.setState(
               {
                   'token': response.data.token
               },this.load_data
           );
           localStorage.setItem('token', response.data.token)

           console.log(this.state.token);
       })
       .catch(error => alert('Wrong password'))
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
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/project/:id' component = {() => <ProjectPage projects={this.state.projects} />} />
                        <Route exact path='/todos' component={() => <TodoList todos={this.state.todos} />}/>
                        <Route exact path='/login' component={() => <LoginForm get_token={(username, password) => this.get_token(username, password)}/>}/>
                        <Redirect from='/users' to='/'/>
                        <Route component={NotFound404}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}


export default App;