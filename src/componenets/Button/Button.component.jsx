import './Button.styles.css';

const BUTTON_TPE_CLASSES = {
  contact: 'contact',
  navButtons: 'navButton',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`btn ${BUTTON_TPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
