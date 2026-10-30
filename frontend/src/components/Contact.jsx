
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");


  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      setStatus("Sending message...");

      const response = await fetch("https://my-portfolio-by2h.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send your message.");
      }

      setStatus(data.message);

      setTimeout(() => {
        setStatus("");
      }, 4000);

      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      console.error("Contact form error:", error);
      setStatus(
        error.message || "Unable to send your message. Please try again."
      );
    }
  }


  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="contact-eyebrow">LET'S CONNECT</span>

          <h2>
            Get in Touch<span className="contact-accent">.</span>
          </h2>

          <p className="contact-description">
            Have a project in mind or an opportunity to discuss?
            Feel free to reach out. I'd love to hear from you.
          </p>

          <div className="social-icons">
            <h3>Connect with me</h3>

            <div className="social-links">
              <a
                href="https://github.com/heetjain8377-wq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/heet-jain-722b68374/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/heet.jain.31149"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/916265151365"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:heetjain8377@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email me"
                title="Email me"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setStatus("");
                }}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Your email address"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("");
                }}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setStatus("");
                }}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message <span aria-hidden="true">↗</span>
            </button>

            <p className="contact-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
