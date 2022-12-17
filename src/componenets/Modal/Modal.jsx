import Button from '../Button/Button';
import { FaTimes } from 'react-icons/fa';
import './Modal.css';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <h2>Hello Modal</h2>
          <FaTimes onClick={onClose} />
          {/* create form componenet for contact */}
        </div>
      </div>
    </>
  );
};

export default Modal;
