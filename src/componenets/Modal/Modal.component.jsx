import { FaTimes } from 'react-icons/fa';
import './Modal.styles.css';

const Modal = ({ open, onClose, children }) => {
  // if not open return nothing
  if (!open) return null;
  return (
    <>
      <div className="modal">
        <div className="overlay" onClick={onClose}></div>
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
};

export default Modal;
