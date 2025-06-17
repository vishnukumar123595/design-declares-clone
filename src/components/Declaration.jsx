import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Declaration = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    declarationType: '',
    website: '',
    country: '',
    discipline: '',
    email: '',
    reason: '',
    consent: false,
    newsletter: false,
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors = {};

    if (!formData.declarationType) newErrors.declarationType = 'Please select a declaration type';
    if (!formData.website.trim()) newErrors.website = 'Website is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.discipline) newErrors.discipline = 'Discipline is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    if (!formData.reason.trim()) newErrors.reason = 'Please tell us why you are declaring';

    if (!formData.consent) newErrors.consent = 'You must consent to data usage';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      declarationType: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Declaration submitted successfully!');
      setFormData({
        declarationType: '',
        website: '',
        country: '',
        discipline: '',
        email: '',
        reason: '',
        consent: false,
        newsletter: false,
      });
      setErrors({});
    }
  };

  return (
    <section className="declaration-section" style={{ marginTop: '10%' }}>
      <div className="declaration-left">
        <h2 className="declaration-heading-left">Declare Emergency Now</h2>
      </div>

      <div
        className="declaration-right"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-once="true"
        data-aos-offset="120"
      >
        <h1 className="declaration-intro-text">
          Design Declares is open to individuals and institutions working in industrial,
           digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries.
           All declarations will be named and published on this site.
        </h1>

        <form className="declaration-form-box" onSubmit={handleSubmit} noValidate>
          <h2 className="declaration-form-title">I am Declaring Emergency</h2>

          {/* Radio buttons */}
          <div className="declaration-radio-group">
            {['business', 'individual', 'institution', 'team'].map((type) => (
              <label key={type} className="declaration-radio-option">
                <input
                  type="radio"
                  name="declarationType"
                  value={type}
                  checked={formData.declarationType === type}
                  onChange={handleRadioChange}
                />
                {`As a ${type === 'institution' ? 'public institution' : type}`}
              </label>
            ))}
            {errors.declarationType && <p className="error" style={{ color: 'red' }}>{errors.declarationType}</p>}
          </div>

          {/* Input fields */}
          <div className="declaration-input-fields">
            <label>
              <input
                type="url"
                name="website"
                placeholder="Website:*"
                value={formData.website}
                onChange={handleChange}
              />
              {errors.website && <p className="error" style={{ color: 'red' }}>{errors.website}</p>}
            </label>

            <label>
              <select name="country" value={formData.country} onChange={handleChange}>
                <option value="">Select Country*</option>
                <option value="UK">United Kingdom</option>
                <option value="Turkey">Turkey</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
                <option value="Vatican City">Vatican City</option>
              </select>
              {errors.country && <p className="error" style={{ color: 'red' }}>{errors.country}</p>}
            </label>

            <label>
              <select name="discipline" value={formData.discipline} onChange={handleChange}>
                <option value="">Select Discipline*</option>
                <option value="Communication Design">Communication Design</option>
                <option value="Digital Design">Digital Design</option>
                <option value="Service Design">Service Design</option>
                <option value="Product Design">Product Design</option>
              </select>
              {errors.discipline && <p className="error" style={{ color: 'red' }}>{errors.discipline}</p>}
            </label>

            <label>
              <input
                type="email"
                name="email"
                placeholder="Email:*"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error" style={{ color: 'red' }}>{errors.email}</p>}
            </label>

            <label>
              <textarea
                name="reason"
                rows="4"
                placeholder="Why are you declaring?"
                value={formData.reason}
                onChange={handleChange}
              ></textarea>
              {errors.reason && <p className="error" style={{ color: 'red' }}>{errors.reason}</p>}
            </label>
          </div>

          {/* Checkboxes */}
          <div className="declaration-checkbox-group">
            <label>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              I consent for my data to be used and my name/reason published.
            </label>
            {errors.consent && <p className="error" style={{ color: 'red' }}>{errors.consent}</p>}

            <label>
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              Add me to the Design Declares newsletter.
            </label>
          </div>

          <p className="declaration-privacy-link">
            <a href="/privacypolicy" target="_blank" rel="noopener noreferrer">
              View our privacy policy
            </a>
          </p>

          <button type="submit" className="custom-button">
            Declare Emergency Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Declaration;
