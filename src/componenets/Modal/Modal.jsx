import { FaTimes } from 'react-icons/fa';
import './Modal.css';

const Modal = ({ open, onClose }) => {
  // if not open return nothing
  if (!open) return null;
  return (
    <>
      <div className="modal">
        <div className="overlay" onClick={onClose}></div>
        <div className="modal-content">
          <h2>Let's talk bzns</h2>
          <FaTimes onClick={onClose} />
          {/* create form componenet for contact form */}
        </div>
      </div>
    </>
  );
};

export default Modal;
