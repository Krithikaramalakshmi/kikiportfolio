
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const form = useRef();
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_33tixhq',
      'template_dr7pzr5',
      form.current,
      'oHawjW60JkirQH3GO'
    )
    .then((result) => {
      console.log(result.text);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      console.log(error.text);
      setStatus('Failed to send message. Please try again.');
    })
    .finally(() => setIsSubmitting(false));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'krithi3104@gmail.com', href: 'mailto:krithi3104@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 6379066991', href: 'tel:+916379066991' },
    { icon: MapPin, label: 'Location', value: 'Chennai', href: '#' },
    { icon: Calendar, label: 'Schedule Call', value: 'Book a meeting', href: '#' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Krithikaramalakshmi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/krithika-r-8a542b249/', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people. Let's create something extraordinary!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 shadow-lg shadow-blue-500/10"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Send Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-300 font-medium">Full Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-lg text-white"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-300 font-medium">Email Address</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-lg text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-gray-300 font-medium">Subject</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-lg text-white"
                  placeholder="What's this about?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300 font-medium">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-lg text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              {status && <p className="text-sm text-green-400">{status}</p>}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-semibold"
              >
                {isSubmitting ? 'Sending...' : (
                  <span className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-blue-500/20"
                  >
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-blue-300 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center"
                  >
                    <social.icon className="w-6 h-6 text-blue-400" />
                  </motion.a>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-blue-300 font-semibold">Available for projects</span>
              </div>
              <p className="text-blue-200 text-sm">I'm currently available for freelance work and exciting new opportunities. Let's discuss how we can work together!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
