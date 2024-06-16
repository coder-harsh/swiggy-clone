import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants"; //named ixport
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

    useEffect(() => {
        console.log("Header Useffect Called");
    }, [btnName]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
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