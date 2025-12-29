// components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Formspree configuration - Replace with your actual endpoint
      const formspreeEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID';

      if (formspreeEndpoint.includes('YOUR_FORM_ID')) {
        throw new Error('Formspree not configured. Please set up your Formspree account and update the .env file.');
      }

      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      console.log('Sending form data to:', formspreeEndpoint);

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('error');

      // Show specific error message
      if (error.message.includes('Formspree not configured')) {
        alert('Formspree is not configured yet. Please follow the setup instructions in the FORMSPREE_SETUP.md file.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "anushakprn@gmail.com",
      link: "mailto:anushakprn@gmail.com"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+91 8179377979",
      link: "tel:+918179377979"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Tirupati, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/anusha-kothapalli-b905b7291/",
      color: "#0077B5"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      link: "https://github.com/anushakprn",
      color: "#333"
    },
    {
      icon: "fas fa-code",
      title: "LeetCode",
      link: "https://leetcode.com/u/anushakprn/",
      color: "#FFA116"
    }
  ];

  return (
    <div className="section contact-section">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">I'm always open to discussing new opportunities and innovative ideas</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-heading">Let's Connect!</h3>
          <p className="contact-description">
            I'm currently looking for full-time opportunities in Data Science, Machine Learning, 
            or Full Stack Development. Feel free to reach out if you want to collaborate on 
            interesting projects or discuss potential opportunities.
          </p>
          
          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link} className="contact-detail">
                <div className="detail-icon">
                  <i className={info.icon}></i>
                </div>
                <div className="detail-content">
                  <h4>{info.title}</h4>
                  <p>{info.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="contact-social">
            <h4>Connect with me:</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ backgroundColor: social.color }}
                >
                  <i className={social.icon}></i>
                  <span>{social.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h3 className="form-title">Send me a message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              <i className="fas fa-paper-plane"></i> {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          
          {submitStatus === 'success' && (
            <div className="success-message" style={{ 
              color: '#28a745', 
              marginTop: '15px', 
              padding: '10px', 
              border: '1px solid #28a745', 
              borderRadius: '5px',
              backgroundColor: '#d4edda'
            }}>
              <i className="fas fa-check-circle"></i> Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="error-message" style={{ 
              color: '#dc3545', 
              marginTop: '15px', 
              padding: '10px', 
              border: '1px solid #dc3545', 
              borderRadius: '5px',
              backgroundColor: '#f8d7da'
            }}>
              <i className="fas fa-exclamation-circle"></i> Failed to send message. Please try again or contact me directly.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;