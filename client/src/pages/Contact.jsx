import { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-bg">
        <div className="cbg-circle c1"></div>
        <div className="cbg-circle c2"></div>
        <div className="cbg-grid"></div>
      </div>

      <div className="contact-content">
        <div className="contact-left">
          <div className="badge">Let's Connect</div>
          <h1 className="contact-title">Get In <span className="accent">Touch</span></h1>
          <p className="contact-sub">
            Whether it's a project idea, collaboration, or just a hello —
            I'd love to hear from you!
          </p>

          <div className="contact-info-cards">
            <div className="info-card">
              <div className="info-icon"></div>
              <div>
                <p className="info-label">Email</p>
                <a href="mailto:oshaniwijekoon28@gmail.com" className="info-value">
                  oshaniwijekoon28@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"></div>
              <div>
                <p className="info-label">Phone</p>
                <a href="tel:+94775257094" className="info-value">
                  +94 77 525 7094
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"></div>
              <div>
                <p className="info-label">LinkedIn</p>
                <a href="https://linkedin.com/in/OshaniWijekoon" target="_blank" rel="noreferrer" className="info-value">
                  Oshani Wijekoon
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"></div>
              <div>
                <p className="info-label">GitHub</p>
                <a href="https://github.com/OshaniWijekoon" target="_blank" rel="noreferrer" className="info-value">
                  OshaniWijekoon
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"></div>
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">No : 21/2, Ihalawela, Kengalla, Kundasale,Kandy, Sri Lanka 🇱🇰</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-form-card">
            <h2 className="form-title">Send a Message</h2>

            {status === 'success' && (
              <div className="alert alert-success">
                Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-error">
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi..."
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;