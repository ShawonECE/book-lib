import PropTypes from 'prop-types';

const Toast = ({text}) => {
    return (
        <div className="toast toast-top toast-end">
            <div className="alert">
                <span>{text}</span>
            </div>
        </div>
    );
};

Toast.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Toast;