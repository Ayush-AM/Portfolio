'use client'

import { useState, type FormEvent, type JSX } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactSection(): JSX.Element {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Reset form and show success message
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitSuccess(true)
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            {'Get In '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {'Touch'}
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {'Have a project in mind or want to collaborate? Feel free to reach out '}
            {'and I\'ll get back to you as soon as possible.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className={`rounded-2xl backdrop-blur-md border p-8 ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
            }`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {'Send Me a Message'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {'Your Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/10 text-white border-white/10 focus:border-cyan-500' 
                      : 'bg-black/5 text-black border-black/10 focus:border-purple-500'
                  } border focus:ring-2 ${isDark ? 'focus:ring-cyan-500/20' : 'focus:ring-purple-500/20'}`}
                  placeholder="Ayush Mahajan"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {'Your Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/10 text-white border-white/10 focus:border-cyan-500' 
                      : 'bg-black/5 text-black border-black/10 focus:border-purple-500'
                  } border focus:ring-2 ${isDark ? 'focus:ring-cyan-500/20' : 'focus:ring-purple-500/20'}`}
                  placeholder="ayush@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {'Subject'}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/10 text-white border-white/10 focus:border-cyan-500' 
                      : 'bg-black/5 text-black border-black/10 focus:border-purple-500'
                  } border focus:ring-2 ${isDark ? 'focus:ring-cyan-500/20' : 'focus:ring-purple-500/20'}`}
                  placeholder="Inquiry"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {'Your Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/10 text-white border-white/10 focus:border-cyan-500' 
                      : 'bg-black/5 text-black border-black/10 focus:border-purple-500'
                  } border focus:ring-2 ${isDark ? 'focus:ring-cyan-500/20' : 'focus:ring-purple-500/20'}`}
                  placeholder="I'd like to discuss...."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {'Sending...'}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {'Send Message'}
                  </>
                )}
              </button>

              {submitSuccess && (
                <motion.div 
                  className="p-4 rounded-lg bg-green-500/20 text-green-500 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {'Message sent successfully! I\'ll get back to you soon.'}
                </motion.div>
              )}

              {submitError && (
                <motion.div 
                  className="p-4 rounded-lg bg-red-500/20 text-red-500 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {submitError}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div 
              className={`rounded-2xl backdrop-blur-md border p-8 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                {'Contact Information'}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                    <Mail className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-purple-600'}`} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-black'}`}>{'Email'}</h4>
                    <a 
                      href="mailto:arpitmahajan856@gmail.com" 
                      className={`text-sm hover:underline ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {'arpitmahajan856@gmail.com'}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                    <Phone className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-purple-600'}`} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-black'}`}>{'Phone'}</h4>
                    <a 
                      href="tel:+91 8830186796" 
                      className={`text-sm hover:underline ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {'+91 8830186796'}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                    <MapPin className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-purple-600'}`} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-black'}`}>{'Location'}</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {'India'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div 
              className={`rounded-2xl backdrop-blur-md border p-8 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                {'Connect With Me'}
              </h3>
              
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Ayush-AM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/10 text-white hover:bg-white/20' 
                      : 'bg-black/10 text-black hover:bg-black/20'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/ayush-mahajan-a50bb3277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/10 text-white hover:bg-white/20' 
                      : 'bg-black/10 text-black hover:bg-black/20'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  href="mailto:arpitmahajan856@gmail.com"
                  className={`p-4 rounded-full transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/10 text-white hover:bg-white/20' 
                      : 'bg-black/10 text-black hover:bg-black/20'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
            
            {/* Availability Status */}
            <div 
              className={`rounded-2xl backdrop-blur-md border p-8 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-500 animate-ping opacity-75"></div>
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  {'Currently Available'}
                </h3>
              </div>
              
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {'I\'m currently available for freelance work and new opportunities. '}
                {'My typical response time is within 24 hours.'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}