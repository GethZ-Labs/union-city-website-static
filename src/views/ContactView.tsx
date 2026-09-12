import React, { useState } from 'react';
import { ContactMessage } from '../types';

interface ContactViewProps {
  prefilledProject?: string;
  onNewMessage: (msg: ContactMessage) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  prefilledProject,
  onNewMessage,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(
    prefilledProject
      ? `Hello, I would like more information and a site viewing for ${prefilledProject}.`
      : ''
  );
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Bot caught
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ text: 'Please fill in all required fields.', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    const newMsg: ContactMessage = {
      id: 'msg-' + Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      message: message.trim(),
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'unread',
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        text: 'Thank you! Your message has been received. Our property advisor will contact you shortly.',
        type: 'success',
      });
      onNewMessage(newMsg);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 500);
  };

  return (
    <div className="content-page" id="contactPage">
      <h1>Contact Us</h1>
      <p>
        Have a question about a property, or want to speak with our team? Send us a message and we'll
        get back to you shortly.
      </p>

      <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        {/* Honeypot field for bot protection */}
        <input
          type="text"
          name="website"
          className="hp-field"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: 'none' }}
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />

        <button type="submit" disabled={isSubmitting} id="contactSubmitBtn">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {status && (
          <p id="contactFormStatus" className={`form-status ${status.type}`}>
            {status.text}
          </p>
        )}
      </form>

      {/* Direct Contact Cards */}
      <div className="content-card reveal reveal-visible" style={{ marginTop: '30px' }}>
        <h3>Reach Us Directly</h3>
        <p>Union City Developers (Pvt) Ltd — Connect with our property advisors or visit our head office.</p>

        <div className="direct-contact-grid">
          <a
            href="tel:+94112847842"
            className="direct-contact-item"
            aria-label="Call Union City Developers at +94 112 847 842"
          >
            <div className="direct-contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div className="direct-contact-info">
              <span className="direct-contact-label">Hotline &amp; Telephone</span>
              <span className="direct-contact-value">+94 112 847 842</span>
              <span className="direct-contact-hint">Tap to call directly &rarr;</span>
            </div>
          </a>

          <a
            href="mailto:info@unioncity.lk"
            className="direct-contact-item"
            aria-label="Email Union City Developers at info@unioncity.lk"
          >
            <div className="direct-contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div className="direct-contact-info">
              <span className="direct-contact-label">Official Email</span>
              <span className="direct-contact-value">info@unioncity.lk</span>
              <span className="direct-contact-hint">Click to compose email &rarr;</span>
            </div>
          </a>

          <a
            href="https://maps.google.com/?q=Union+City+Developers,+267+Borella+Road,+Depanama,+Pannipitiya"
            target="_blank"
            rel="noopener noreferrer"
            className="direct-contact-item"
            aria-label="Find Union City Developers on Google Maps"
          >
            <div className="direct-contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
            </div>
            <div className="direct-contact-info">
              <span className="direct-contact-label">Head Office Address</span>
              <span className="direct-contact-value">267, Borella Road, Depanama, Pannipitiya</span>
              <span className="direct-contact-hint">Open in Google Maps &rarr;</span>
            </div>
          </a>

          <a
            href="https://www.facebook.com/unioncitydevelopers"
            target="_blank"
            rel="noopener noreferrer"
            className="direct-contact-item"
            aria-label="Visit Union City Developers Official Facebook Page"
          >
            <div className="direct-contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="direct-contact-info">
              <span className="direct-contact-label">Official Facebook Page</span>
              <span className="direct-contact-value">facebook.com/unioncitydevelopers</span>
              <span className="direct-contact-hint">Visit official page &rarr;</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
