import React from 'react';
import PropTypes from 'prop-types';
import './customButton.less';

const CustomButton = props => {
    const {
        name,
        callback,
        backgroundColor
    } = props;

    return (
        <button style={{ background: backgroundColor }}
                className="custom-button"
                onClick={callback && callback}>
            {name}
        </button>
    );
};

CustomButton.propTypes = {
    backgroundColor: PropTypes.string,
    callback: PropTypes.func.isRequired,
    name: PropTypes.string,
};

CustomButton.defaultProps = {
    name: 'Custom Button',
    backgroundColor: 'red',
};

export default CustomButton;