import css from './Loader.module.css'
import CircleLoader from "react-spinners/CircleLoader";

const Loader = ({ children }) => {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    return (
        <div className={css.loaderContainer}>
            <CircleLoader
                color="#6ed1bc"
                cssOverride={override}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

            {children}</div>
    )
}

export default Loader