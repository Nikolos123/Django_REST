import React from 'react'


class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'name': '',
            'users': [],
            'link': ''
        }
    }

    handleChange(event) {
        console.log(parseInt(event.target.value))
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleChangeUsers(event) {
        if (!event.target.selectedOptions) {
            return;
        }

        let users = [];
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            users.push(event.target.selectedOptions.item(i).value);
        }
        console.log(users);

        this.setState(
            {
                'users': users
            }
        );
    }


    handleSubmit(event) {
        this.props.create_project(this.state.name, this.state.users, this.state.link);
        event.preventDefault();
    }

    render() {
        return (
            <form class="header" onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="name" placeholder="name" value={this.state.name}
                       onChange={(event) => this.handleChange(event)}/>
                <input type="text" name="link" placeholder="link" value={this.state.link}
                       onChange={(event) => this.handleChange(event)}/>
                <select multiple name="user" className='form-control'
                        onChange={(event) => this.handleChangeUsers(event)}>
                    {this.props.users.map((item) => <option value={item.id}>{item.username}</option>)}
                </select>

                <input type="submit" value="Create"/>
            </form>
        );

    }
}


export default ProjectForm;