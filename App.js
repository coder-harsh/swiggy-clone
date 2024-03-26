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
const ResturantCard = () => {
    return (
        <div className="res-card" style={styleCard}>  {/*{ } aceepts jsx object. It is inline style in jsx*/}
            <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395" />
            <h3>Meghana Foods</h3>
            <h4>Pizzas, Italian, Pastas, Desserts</h4>
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
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
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