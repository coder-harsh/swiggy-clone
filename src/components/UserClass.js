import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props); //this is manadatory
        console.log(props);
        this.state = {   //this is how state variable is declared. here state is a whole big object
            count: 0,
            count2: 2 //even in fn componet, useState object holding all useState variable inside a single state object.
        }
        console.log("Child Constructor is called");
    }
    componentDidMount() {
        console.log("child componentDidMount");
    }
    render() {
        const { name } = this.props;
        const { count, count2 } = this.state;
        console.log("Child Render is called");
        return (
            <div className="user">
                <h2>Count: {count}</h2>
                <h2>Count 2: {count2}</h2>
                <button onClick={() => {
                    // count = count + 1; //we cant do this. we cannot update state variable directoly. for it react gives superpower method this.setState();
                    this.setState({ //iske anadr ek object pass hoga jo state variable update karega.
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1
                    })
                }}>Counter</button>
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


//the first thing, when a class is loaded, a constructor is called.
//after it, render() is called. i.e first constructor, then render() is called.