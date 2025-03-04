import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        CrowdFund
      </Link>
      
      <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
        <div className={styles.navLinks}>
          <button onClick={() => scrollToSection('services')} className={styles.link}>Services</button>
          <button onClick={() => scrollToSection('howItWorks')} className={styles.link}>How it Works</button>
          <button onClick={() => scrollToSection('startCampaign')} className={styles.link}>Start a Campaign</button>
        </div>
        <div className={styles.authLinks}>
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <Link to="/login" className={styles.link}>Login</Link>
          <Link to="/signup" className={`${styles.link} ${styles.signupBtn}`}>Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
