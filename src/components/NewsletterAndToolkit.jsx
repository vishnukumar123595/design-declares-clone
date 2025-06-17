
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toolkitImage from '../assets/toolkit.webp';

const NewsLetterToolkit = () => {
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!agree) {
      setError('Please agree to receive the newsletter.');
      return;
    }

    // Here you could handle form submission to a server or third-party
    console.log('Subscribed:', email);
    setSubmitted(true);
    setEmail('');
    setAgree(false);
  };

  return (
    <section
      className="Donation"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-once="true"
      data-aos-offset="120"
    >
      <div className="info-left-Donation">
        <h2>The Design Declares Newsletter and Toolkit</h2>
      </div>

      <div className="info-right-Donation">
        <img src={toolkitImage} alt="Toolkit" className="newsletterImage" />
        <h1 className="main-heading-Donation">
          Subscribe to the Design Declares UK newsletter to receive the latest news and updates.
          By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community.
        </h1>
        <h3>
          Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet,
          you can still access the Toolkit - just register below.
        </h3>

        <form className="newsletter-input-fields" onSubmit={handleSubmit} noValidate>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
          </label>

          <div className="declaration-checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                required
              />
              I would like to be added to the Design Declares! newsletter and receive further updates.
            </label>
          </div>

          {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
          {submitted && <p style={{ color: 'green', marginTop: '0.5rem' }}>Thank you for subscribing!</p>}

          <p className="declaration-privacy-link">
            <a href="/privacypolicy" target="_blank" rel="noopener noreferrer">
              View our privacy policy
            </a>
          </p>

          <button type="submit" className="custom-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetterToolkit;
