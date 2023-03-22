import './GenericModal.scss'
import { Modal } from 'react-bulma-components'

const modalContainerStyles = {
  padding: '10px',
}

const LazyGenericModal = ({ showModal, setShowModal, title, footer, children }) => {
  return (
    <Modal show={showModal} 
      showClose={false}
      onClose={() => setShowModal(false)}
      className="modal-custom-style">
      <Modal.Card>
        <Modal.Card.Header>
          <Modal.Card.Title>
            {title}
          </Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body>
          <div style={modalContainerStyles}>{children}</div>
        </Modal.Card.Body>
        <Modal.Card.Footer>
          {footer && <>{footer}</>}
        </Modal.Card.Footer>
      </Modal.Card>
    </Modal>
  )
}

export default LazyGenericModal