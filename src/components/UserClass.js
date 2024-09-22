import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props); //this is manadatory
        console.log(props);
    }
    render() {
        const { name } = this.props;
        return (
            <div className="user">
                <h2>Name: {name}</h2> {/*this.props.name se data receive hoga constructor se*/}
                <h3>Location: Patna</h3>
                <h3>Contact: harsh@indiandevelopers.org</h3>
            </div>
        );
    }
}
export default UserClass;

//Functional compoenent is a js function which returns some picece of JSX.
//Class based compoenet is a class which inherits from React.Component and it has a render method which returns some piece of jsx.
//React.Component is a class which is given to us by React.
// UserClass is inhering some property of React.Component.