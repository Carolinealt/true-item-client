import css from './ErrorDisplay.module.css'

const ErrorDisplay = ({ message }) => {
    return (
        <div className={css.errorContainer}>
            <p>Ooops, please, be aware: <span className={css.message}>{message}</span></p>
        </div>
    )
}

export default ErrorDisplay