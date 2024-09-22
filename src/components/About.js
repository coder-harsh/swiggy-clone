import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>About Swiggy</h1>
            <h3>One Destination for eating</h3>
            <User name={"Akshay Saini (Function)"} /> {/*pass data fn compo*/}
            <UserClass name={"Akshay Saini Class"} />     {/* in both component type, way of passing the data is same but way of receive data is different. */}
        </div>
    );
};
export default About;