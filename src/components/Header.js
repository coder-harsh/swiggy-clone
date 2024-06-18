import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants"; //named ixport
import { Link } from "react-router-dom";
const Header = () => {
    // let btnName = "Login";
    const [btnName, setbtnName] = useState("Login"); //once this useState variable changes, whole component outside use state will be rendered. thats why we need to use usestate inside a component
    //after new value of state variable, whole component will be rerendered and btnName will be a new variable with updated value..
    //only btn will be changed which is reconsilation or diff algorithm. if header will be refreshed only button will be refreashed.
    console.log("Header Render");

    //use effect has 2 arguments. 1st is call back funtion, 2nd is dependency array. dependency array is not mandatory always.
    //if no dependncey array, useffect will be called on every component render.
    //if dependency array is empty, useffect will be called on initial render(just once).

    //if dependency array is [btnName], then useeffect will be called when btnName(dependency array) will be updated.

    //useffect will always be called on initial render of component. 
    /*
        useEffect(() => {
            console.log("Header Useffect Called");
        }, [btnName]);
    */
    //never create usestate outside your component. It will throw an error: Hook can be only be called inside the body of function component.
    //usestate is used to create local state variable inside the functional component.
    //always try to write usestate in top of the component. It will not create any inconsistency.
    //never create usestate inside if else, for loop or inside any function.


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {/* <li><a href="/about">About US</a></li> anchor tag will reload the page but Link will not */}
                    <li><Link to="/about">About US</Link></li>
                    <li><Link to="/contact">Contact US</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                        console.log(btnName);
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header; //default export