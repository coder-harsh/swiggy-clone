import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/coder-harsh");
        const json = data.json();
    }
    render() {
        return (
            <div className="user">
                <h2>Name: {this.props.name}</h2>
                <h3>Location: Patna</h3>
                <h3>Contact: harsh@indiandevelopers.org</h3>
            </div>
        );
    }
}
export default UserClass;