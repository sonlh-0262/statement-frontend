import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Place from './Place';
import SearchBoxModal from './SearchBoxModal'

class MapModal extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Modal show={this.props.show_modal} onHide={this.props.handleHideShowModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              <span className="text-success">SEARCH PLACE</span><br></br>
              <SearchBoxModal
                handleGetLocationFromModal={this.props.handleGetLocationFromModal}
                address={this.props.address}
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Place latLng={this.props.latLng} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.handleHideShowModal}>
              Get Place
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

 export default MapModal;