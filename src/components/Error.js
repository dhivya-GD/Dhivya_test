import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div className="error">
            <h1>OOPs.......</h1>
            <h2>Something went worng </h2>
            <h3>{err.status}</h3>
        </div>
    );
}
export default Error;