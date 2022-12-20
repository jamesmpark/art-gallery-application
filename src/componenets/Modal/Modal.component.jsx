import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Modal.styles.css';

const Modal = forwardRef((props, ref) => {
  // modal state
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      // open and close can now be accessed in Nav component useRef
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.2,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.4,
            },
          }}
        >
          {/* overlay prevents modal from closing 
          when modal-wrapper is clicked */}
          <div className="overlay" onClick={() => setIsOpen(false)}></div>
          <motion.div
            className="modal-wrapper"
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                delay: 0.2,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.2,
              },
            }}
          >
            <motion.div
              className="modal-content"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 0.2,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              {props.children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default Modal;
