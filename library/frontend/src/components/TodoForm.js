import React from 'react'


class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'comment': '',
            'project': '',
            'active': ''

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


    handleChangeProject(event) {
        if (!event.target.selectedOptions) {
            return;
        }

        let project = [];
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            project.push(event.target.selectedOptions.item(i).value);
        }
        console.log(project);

        this.setState(
            {
                'project': project
            }
        );
    }


    handleSubmit(event) {
        this.props.create_todo(this.state.project, this.state.comment, this.state.users, this.state.active);
        event.preventDefault();
    }

    render() {
        return (
            <form class="header" onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="comment" placeholder="comment" value={this.state.comment}
                       onChange={(event) => this.handleChange(event)}/>

                <input type="checkbox"  name="active" placeholder="active" value={this.state.active}
                       onChange={(event) => this.handleChange(event)}/>

                <input type="text" name="project" placeholder="project" value={this.state.project}
                       onChange={(event) => this.handleChange(event)}/>
                <select multiple name="user" className='form-control'
                        onChange={(event) => this.handleChangeUsers(event)}>
                    {this.props.users.map((item) => <option value={item.id}>{item.username}</option>)}
                </select>
                {/*<select multiple name="projecte" className='form-control'*/}
                {/*        onChange={(event) => this.handleChangeProject(event)}>*/}
                {/*    {this.props.project.map((item) => <option value={item.id}>{item.name}</option>)}*/}
                {/*</select>*/}

                <input type="submit" value="Create"/>
            </form>
        );

    }
}


export default ProjectForm;