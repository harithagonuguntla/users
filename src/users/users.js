import React from 'react';
import User from './user';

class Users extends React.Component {

    state = {
        users : [
            {name : 'John', age: 20},
            {name : 'Jill', age: 30},
            {name : 'Jack', age: 40}
        ],
        title: "Users List"
    }

    makeYounger = () => {
        const newUser = this.state.users.map((user) => {
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser
        })
        this.setState({
            newUser
        })
    }

    render() {
        return (
            
            <div>
                <button onClick = {this.makeYounger}>
                    Make us 10 years Younger.
                </button>
                <br />

                <h1>{this.state.title}</h1>
                {this.state.users.map((user)=>{
                    return <User age={user.age}>{user.name}</User>
                })}
            </div>
        )
    }
}

export default Users;