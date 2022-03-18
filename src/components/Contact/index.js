import React, { useState } from 'react';

const [formState, setFormState] = useState({ name: '', email: '', message: '' });

function ContactForm() {
  function handleChange(e) {
    e.preventDefault();
    console.log(formState);
  }
  console.log(formState);
  const { name, email, message } = formState;
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onChange={handleChange} name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
    );
}

// function has to match 
export default ContactForm;