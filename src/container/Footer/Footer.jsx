import React, { useState } from 'react';
import { images } from '../../constants';
import AppWrap from '../../Wrapper/AppWrap';
import MotionWrap from '../../Wrapper/MotionWrap';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    // Prepare data for submission
    const contact = {
      name: name,
      email: email,
      message: message
    };

    // Make a POST request to the backend
    fetch('https://django-send-email.vercel.app/send-email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
    .then((response) => {
      if (response.ok) {
        setLoading(false);
        setIsFormSubmitted(true);
      } else {
        throw new Error('Failed to send message');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setLoading(false);
      // Handle error, show error message, etc.
    });
  };

  return (
    <>
      <h2 className='head-text'>Get in touch</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='Email' />
          <a href='mailto:harissh0110@gmail.com' className='p-text' target="_blank" rel="noreferrer" >
            harissh0110@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <p>9080614108</p>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Your Name' name='name'  value={name} required onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
            <input className='p-text' type='email' placeholder='Your Email' name='email'  value={email} required onChange={handleChangeInput} />
          </div>
          <div>
            <textarea className='p-text' placeholder='Your Message' value={message} name='message' required onChange={handleChangeInput} />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg');
