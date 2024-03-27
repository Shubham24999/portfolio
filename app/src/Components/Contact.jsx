import React from 'react';
import emailjs from 'emailjs-com';
import { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID } from './ConfidentialData'; // Import your credentials
import "./Email.css"


const ContactForm = () => {

  console.log(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID);
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Optionally, reset the form after successful submission
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
      });
  }

  return (
    <div>
      <div>
        <h3>It would be grate to contact with you.</h3>
      </div>
      <div>
      <form className="contact-form" onSubmit={sendEmail}>
      {/* Add your form fields here */}
      <label>Name</label>
      <input type="text" name="from_name" required />
      <label>Email</label>
      <input type="email" name="reply_to" required />
      <label>Subject</label>
      <input type="text" name="subject" required />
      <label>Message</label>
      <textarea name="message_html" required />

      <input type="submit" value="Send" />
    </form>
      </div>
    </div>
  );
};

export default ContactForm;
