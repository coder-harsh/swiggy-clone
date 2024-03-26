import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.coderharsh.in/media/swiggy-clone/logo.webp" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const styleCard = { //we can also put this inside {} directly: 4:0:43:32
    // backgroundColor: "#f0f0f0",
    borderRadius: "16px",
}
// const ResturantCard = (props) => {//this propos will be an object now. It is argument. But paramter is local to function. Paramter is defined in fun definition only. Is props ka name kuchh v ho sakta hain. Yahan fn call and recieve v ho raha hain so ye argument hain
// some cool developers
const ResturantCard = ({ resName, cuisine }) => { //destructuring on the fly
    // console.log(props); //{resName: 'Meghna Fooots', cuisine: 'Biryani, Fast Foods'} //{resName: 'KFC', cuisine: 'Burger, Fast Foods'} //props is an object here
    console.log(resName); //Megna Foods KFC //when destructuring funtion
    //const {resName, cuisine} = props; //destructuring
    return (
        <div className="res-card" style={styleCard}>  {/*{ } aceepts jsx object. It is inline style in jsx*/}
            <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395" />
            <h3>{resName}</h3> {/*when destructuring*/}
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h5>38 Mins</h5>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard resName="Meghna Fooots" cuisine="Biryani, Fast Foods" />
                <ResturantCard resName="KFC" cuisine="Burger, Fast Foods" />
            </div>
        </div>
    )
}
const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);