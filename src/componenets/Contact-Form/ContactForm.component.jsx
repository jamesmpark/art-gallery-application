import { useState } from 'react';
import Button from '../Button/Button.component';
import { FaArrowRight } from 'react-icons/fa';
import FormInput from '../Form-Input/FormInput.component';
import FormMessageInput from '../Form-Message-Input/FormMessageInput.componenet';
import './ContactForm.styles.scss';
const defaultFormFields = {
  displayName: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, message } = formFields;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submit button was clicked');
  };
  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormMessageInput
          label="Share a message"
          type="text"
          required
          onChange={handleChange}
          name="message"
          value={message}
        />
        <div className="contact-btn-group">
          <Button className="btn submit" type="submit" onClick={handleSubmit}>
            Submit
            <FaArrowRight />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
