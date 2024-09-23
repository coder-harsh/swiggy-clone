import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// import { Component } from "react"; //we can also use this and directly extends to component
class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor"); //first parent will be called then child compoent
    }
    componentDidMount() {
        console.log("Parent componentDidMount");
    }
    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About Swiggy</h1>
                <h3>One Destination for eating</h3>
                <User name={"Akshay Saini (Function)"} /> {/*pass data fn compo*/}
                <UserClass name={"Akshay Saini Class"} />     {/* in both component type, way of passing the data is same but way of receive data is different. */}
            </div>
        );
    }
}
export default About;


//first constuctior will be called the render method will be called/ Then, componentDidMount metho willl be called.
//componentdidMount will be called agfer component is caaled.

//first parent constructor called, then parent render called now it will load child consutuctor called.
//again next will be called.

///in class based component, componentDidMount is used to fetch api data as it is called after the component is rendered.
//First constructor, then render and hen componentdidmount is called.
//dom manipulation is the most expensive thing, when we are updating the component.
//refer projects.wojtek.maj for diagram or vdo 8
//render phase is very fast. commit phase takes time.
/*
Parent constructor
Parent Render

-------------ender phase

Child 1 constructor
child 1 render
child 2 constructor
child 2 render

------------
here diff is calculated
reconciliation is triggered
then ---commit phase

dom updated in a signgle batch
child 1 component componentdidmount
child 2 component componentdidmount



parent componentdidmount

*/