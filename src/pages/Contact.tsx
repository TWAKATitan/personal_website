import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Phone, Github, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Use mailto to send email
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:leo2tseng@gmail.com?subject=${subject}&body=${body}`;
      
      window.open(mailtoLink, '_self');
      
      // Simulate success state
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1000);
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="contact-page">
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="contact-header" variants={itemVariants}>
          <h1>CONTACT</h1>
          <p className="contact-subtitle">Let's Create Something Together</p>
        </motion.div>

        <motion.div className="contact-content" variants={itemVariants}>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p className="contact-description">
              I'd love to discuss new opportunities, project collaborations, or any tech-related topics.
              Feel free to reach out through any of the following methods.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <MapPin size={20} />
                <div>
                  <h3>Location</h3>
                  <p>Kaohsiung, Taiwan</p>
                </div>
              </div>

              <div className="contact-item">
                <Mail size={20} />
                <div>
                  <h3>Email</h3>
                  <p>leo2tseng@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={20} />
                <div>
                  <h3>Phone</h3>
                  <p>0939289667</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/TWAKATitan" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="loading-spinner"></div>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  className="status-message success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle size={20} />
                  <span>郵件應用程式已開啟，請在您的郵件應用程式中發送訊息</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="status-message error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={20} />
                  <span>發送失敗，請直接發送郵件至 leo2tseng@gmail.com</span>
                </motion.div>
              )}

            </form>
          </div>
        </motion.div>

        <motion.div className="contact-cta" variants={itemVariants}>
          <h2>Ready to Start Working Together?</h2>
          <p>
            Whether it's internship opportunities, project collaborations, or technical discussions, 
            I'm excited to connect with you. Let's create something amazing together!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact; 