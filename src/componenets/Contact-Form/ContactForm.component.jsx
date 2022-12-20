import { useState } from 'react';
import Button from '../Button/Button.component';
import FormInput from '../Form-Input/Form-Input.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  textArea: '',
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, textArea } = formFields;

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
        {/* create FormTextArea componenet */}
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
