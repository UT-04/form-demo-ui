import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="bg-danger text-white">
                    <Modal.Title id="contained-modal-title-vcenter">
                        An Error Occurred...
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {props.error}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Okay</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};

export default ErrorModal;