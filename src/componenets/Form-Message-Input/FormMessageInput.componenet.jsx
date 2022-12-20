import './FormMessageInput.styles.scss';

const FormMessageInput = ({ label, ...otherProps }) => {
  return (
    <div className="message">
      {label}
      <textarea className="form-message" {...otherProps} />
    </div>
  );
};

export default FormMessageInput;
