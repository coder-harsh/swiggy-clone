import { useRouteError } from "react-router-dom"; //agar koi chij use se start ho to wo hook h react convention mein. Hook is a function with special power
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Error 404</h1>
            <h3>Page Not Found</h3>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}
export default Error;