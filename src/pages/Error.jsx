import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError()
    console.error(error);

    return(
        <div id='error-page' className="col-10 mx-auto max-w m-5">
            <h1 className='display-6 title-custom'>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.data || error.error.message}</i>
            </p>
        </div>
    )
}