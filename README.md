Swiggy Clone Project made in Akshay Namaste React Course.
TWO Types of Exort/Import

-Default Export/Import

export default Component;
import Component from "path";

-Named Export/Import - multiple export kar rahe ho then use this

export const Component;
import {Component} from "path";

-ex
export const Header = () => { //named export
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
</ul>
</div>
</div>
)
}

import {Header} from "./components/Header"; //named import

---

-deafult
const Header = () => { //named export
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
</ul>
</div>
</div>
)
}
export default Header;

import Header from "./components/Header"; //named import

-multiple export - named export
-single export - default

#react Hook
-normal js utility function
99% these 2 hooks: 80% useState and 20% useState
-useState(), useEffect()

-useState(): superpowerful state variable in React
-it will be named import
-maintains state of variable/component
-local state variable's scope is inside that component

-useState variable mein agar array/object rahega and use variable ko hum agar const se v define karenge to error nhi dega.

#types of routing

-Server side routing: When routing happend, network call will be there. ex: anchor tag
-Client Side routing: when routing happend, network call will not be there. ex: link to

in client side routing: when routing happend, there will be interchange of component.

This is why react is for single page application as only one page loads then there is interchange of components with client side routing.
