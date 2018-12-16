import React from 'react';
import ModalWindow from '../modalWindow/ModalWindow.jsx';
import CustomButton from '../../libraryComponents/buttons/customButton/CustomButton.jsx';
import './mainComponent.less';

export default class MainComponent extends React.Component {
    state = {
        isOpen: false,
    };

    toggleModalWindow = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    };

    render() {
        const { toggleModalWindow } = this;
        const { isOpen } = this.state;

        return (
            <div className="page-wrapper">
                <header className="page-wrapper__header"/>
                <main className="page-wrapper__content">
                    <CustomButton
                        name={'Open Modal Window'}
                        callback={toggleModalWindow}
                    />
                    {isOpen &&
                        <ModalWindow
                            content='This is Modal Window'
                            callbackClose={toggleModalWindow}
                        />
                    }
                </main>
                <footer className="page-wrapper__footer"/>
            </div>
        );
    }
}