import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertModal({ opt, onModal }) {
    let { title, desc } = opt;
    const amitModal = () => {
        onModal({ time: Date.now(), desc: 'ABCDEF' });
    }
    return (
        <Alert dismissible variant="danger">
            <Alert.Heading>{title}</Alert.Heading>
            <p>{desc}</p>
            <button className="btn btn-primary" onClick={amitModal} >C-BTN</button>
        </Alert>
    )
}

export default AlertModal;

