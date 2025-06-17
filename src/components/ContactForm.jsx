

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    termToContact: '',
    enquiryType: '',
    message: '',
    newsletter: false,
  });

  const [errors, setErrors] = useState({});

  // Simple email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.termToContact) {
      newErrors.termToContact = 'Please select a term to contact';
    }

    if (!formData.enquiryType) {
      newErrors.enquiryType = 'Please select an enquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Form is valid — do your submission logic here
      alert('Message sent successfully!');

      // Reset form
      setFormData({
        name: '',
        email: '',
        termToContact: '',
        enquiryType: '',
        message: '',
        newsletter: false,
      });

      setErrors({});
    }
  };

  return (
    <section className="declaration-section">
      <div className="declaration-left">
        <h2 className="declaration-heading-left">Contact</h2>
      </div>

      <div className="declaration-right">
        <form className="declaration-form-box" onSubmit={handleSubmit} noValidate>
          <h2 className="declaration-form-title">Send Us A Message</h2>

          <div className="declaration-input-fields">
            <label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                autoComplete="name"
                aria-describedby="nameError"
                aria-invalid={errors.name ? 'true' : 'false'}
              />
            </label>
            {errors.name && (
              <div className="error-message" id="nameError" style={{color: 'red'}}>
                {errors.name}
              </div>
            )}

            <label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                autoComplete="email"
                aria-describedby="emailError"
                aria-invalid={errors.email ? 'true' : 'false'}
              />
            </label>
            {errors.email && (
              <div className="error-message" id="emailError" style={{color: 'red'}}>
                {errors.email}
              </div>
            )}

            <label>
              <select
                name="termToContact"
                value={formData.termToContact}
                onChange={handleChange}
                aria-describedby="termError"
                aria-invalid={errors.termToContact ? 'true' : 'false'}
              >
                <option value="" disabled>
                  Term to Contact*
                </option>
                <option value="UK">D! UK</option>
                <option value="Ireland">D! Ireland</option>
                <option value="Brazil">D! Brazil</option>
                <option value="Australia">D! Australia</option>
              </select>
            </label>
            {errors.termToContact && (
              <div className="error-message" id="termError" style={{color: 'red'}}>
                {errors.termToContact}
              </div>
            )}

            <label>
              <select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                aria-describedby="enquiryError"
                aria-invalid={errors.enquiryType ? 'true' : 'false'}
              >
                <option value="" disabled>
                  Enquiry Type*
                </option>
                <option value="Contribute to the Toolkit">
                  Contribute to the Toolkit
                </option>
                <option value="Volunteer my time">Volunteer my time</option>
                <option value="Set up a new chapter">Set up a new chapter</option>
                <option value="Discuss something else">Discuss something else</option>
              </select>
            </label>
            {errors.enquiryType && (
              <div className="error-message" id="enquiryError" style={{color: 'red'}}>
                {errors.enquiryType}
              </div>
            )}

            <label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please enter your message here"
                aria-describedby="messageError"
                aria-invalid={errors.message ? 'true' : 'false'}
              ></textarea>
            </label>
            {errors.message && (
              <div className="error-message" id="messageError" style={{color: 'red'}}>
                {errors.message}
              </div>
            )}
          </div>

          <div className="declaration-checkbox-group">
            <label>
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              I would like to be added to the Design Declares! newsletter and receive further updates.
            </label>
          </div>

          <p className="declaration-privacy-link">
            <a href="/privacypolicy" target="_blank" rel="noopener noreferrer">
              View our privacy policy
            </a>
          </p>

          <button type="submit" className="custom-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
