import React from 'react';
import ReactDOM from 'react-dom';
import './modalWindow.less';
import PropTypes from 'prop-types';
import CustomButton from '../../libraryComponents/buttons/customButton/CustomButton.jsx';

export default class ModalWindow extends React.Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
        callbackClose: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        // this.portal = document.createElement('div');
        // document.body.appendChild(this.portal);
    }

    // componentWillUnmount() {
    //     document.body.removeChild(this.portal);
    // }

    render() {
        const { content, callbackClose } = this.props;

        return ReactDOM.createPortal(
            <div className="modal-window-wrapper">
                <div className="modal-window-wrapper__content-text">{content}</div>
                <div className="modal-window-wrapper__button-container">
                    <CustomButton
                        name={'CLOSE MODAL WINDOW'}
                        backgroundColor={'blue'}
                        callback={callbackClose}
                    />
                </div>

                {/*<button className="custom-button" onClick={callbackClose}></button>*/}
            </div>,
            document.getElementById('modal-root')
        );
    }
}