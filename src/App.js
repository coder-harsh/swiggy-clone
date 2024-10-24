import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; //named import
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //when ever we need to create routes, we need to create routing configuration. This createbrowserrouter will create routing configuration for us.
const AppLayout = () => {
    return <div className="app">
        <Header />
        <Outlet /> {/*outlet component will be filled as per path. in html, about will replace outlet as per path*/}
    </div>
}


const appRouter = createBrowserRouter([  //RouterProvider will actually provide routing configuration to our app. RouterProvider will be imported from react dom library.
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/resturants/:resId",
                element: <ResturantMenu />,
            },
        ],
        errorElement: <Error />,
    },
]); //we have to pass configuration. It is like what will happend if we call a specific route or path.


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />); //this is how we make router


//there are so many react dom browser router. But it is recommended to use createbrowserrouter