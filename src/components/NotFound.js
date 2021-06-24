import './NotFound.scss';

function NotFound () {
    return(
        <div className="not-found">
            <p className="material-icons not-found__smiley">sentiment_very_dissatisfied</p>
            <p>We are sorry, we were anable to find the content you are looking for. It looks like there is a small mistake in the url.</p>
            <p>Have another try !</p>
        </div>
    );
}

export default NotFound;