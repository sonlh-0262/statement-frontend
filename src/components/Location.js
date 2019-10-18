import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';

function Location() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"></span>
        </div>
        <input type="text" className="form-control" placeholder="Please select a place!" onClick={handleShow} />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><span className="text-success">SEARCH PLACE</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Get Place
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Location;
