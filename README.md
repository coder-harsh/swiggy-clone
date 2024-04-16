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
