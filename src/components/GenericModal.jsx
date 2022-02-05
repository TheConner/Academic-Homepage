import * as React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';

import './GenericModal.scss'

const modalContainerStyles = {
    padding: '10px'
}

const GenericModal = ({ showModal, setShowModal, title, children }) => {
    let appRoot = undefined;
    if (typeof document !== `undefined`) {
        appRoot = document.getElementById('___gatsby');
    } else {
        appRoot = {};
    }

    return (
        <Modal
            isOpen={showModal}
            appElement={appRoot}
            className="modal-custom-style"
            overlayClassName="modal-overlay"
            bodyOpenClassName="ReactModal__Body--open">
            <div className="modal-header-container">
                <h1 className="modal-title title is-4">{title}</h1>
                <div className="modal-button-position-anchor">
                    <button className="fakehref close-button" onClick={() => setShowModal(false)}>
                        <FontAwesomeIcon className={"closeIcon"}
                            icon={['fas', 'window-close']} size={'2x'}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <div style={modalContainerStyles}>
                {children}
            </div>
        </Modal>
    )
}

export default GenericModal;
