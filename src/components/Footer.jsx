import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add newsletter subscription logic here
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>CrowdFund</h3>
          <p>Bringing creative projects to life through community funding.</p>
          <div className={styles.social}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <FaDiscord />
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h4>Quick Links</h4>
          <nav className={styles.links}>
            <Link to="/about">About Us</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className={styles.section}>
          <h4>Newsletter</h4>
          <form onSubmit={handleSubmit} className={styles.newsletter}>
            <p>Stay updated with our latest projects and news</p>
            <div className={styles.inputGroup}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} CrowdFund. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
