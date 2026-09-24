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
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(
    prefilledProject
      ? `Hello, I would like more information and a site viewing for ${prefilledProject}.`
      : ''
  );
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const sampleInquiries = [
    'Schedule a sample site visit for this weekend',
    'Request sample survey plan & perch pricing sheet',
    'Inquire about 24-month interest-free installment schemes',
    'Verify clear freehold title deed documents',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Bot caught
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setStatus({ text: 'Please fill in your name, phone number, and message.', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    const newMsg: ContactMessage = {
      id: 'msg-' + Date.now(),
      name: name.trim(),
      phone: phone.trim(),
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
      setPhone('');
      setMessage('');
    }, 500);
  };

  return (
    <div className="content-page" id="contactPage" style={{ maxWidth: '720px', margin: '0 auto', padding: '36px 20px' }}>
      <h1 className="page-title" style={{ textAlign: 'center' }}>Contact Us</h1>
      <p className="content-subtitle" style={{ textAlign: 'center', marginBottom: '28px' }}>
        Have a question about a property, or want to speak with our team? Call our hotline directly or submit your inquiry below.
      </p>

      {/* Direct Telephone & WhatsApp Banner */}
      <div
        style={{
          background: 'rgba(2, 132, 199, 0.08)',
          border: '1px solid rgba(2, 132, 199, 0.3)',
          borderRadius: '16px',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '28px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '1.6rem' }}>📞</span>
          <div>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.98rem' }}>
              Direct Telephone Hotline
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>
              Instant assistance: <a href="tel:+940xxxxxxxxx" style={{ color: '#38bdf8', fontWeight: 700 }}>+94 0xxxxxxxxx</a>
            </div>
          </div>
        </div>

        <a
          href={`https://wa.me/?text=${encodeURIComponent('Hello Union Home, I would like to inquire about your land properties.')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#25D366',
            color: '#062013',
            fontWeight: 700,
            fontSize: '0.85rem',
            padding: '9px 16px',
            borderRadius: '10px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          💬 WhatsApp
        </a>
      </div>

      {/* Quick Sample Questions */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>
          💡 Click a sample question to fill:
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {sampleInquiries.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setMessage(sample)}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--glass-border)',
                borderRadius: '20px',
                padding: '6px 14px',
                fontSize: '0.8rem',
                color: '#e2e8f0',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(56, 189, 248, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              + {sample}
            </button>
          ))}
        </div>
      </div>

      <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone / WhatsApp Number *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message / Property Inquired *"
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
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </button>

        {status && (
          <p id="contactFormStatus" className={`form-status ${status.type}`}>
            {status.text}
          </p>
        )}
      </form>
    </div>
  );
};
