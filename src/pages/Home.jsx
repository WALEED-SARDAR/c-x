import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  const services = [
    { 
      title: 'Crowdfunding', 
      description: 'Raise funds for your creative projects through our dedicated community of backers in Pakistan.',
      icon: '💰'
    },
    { 
      title: 'Community Building', 
      description: 'Connect with like-minded creators and build your audience within Pakistan.',
      icon: '👥'
    },
    { 
      title: 'Expert Guidance', 
      description: 'Receive guidance from industry experts in Pakistan to make your project successful.',
      icon: '⭐'
    },
    { 
      title: 'Local Support', 
      description: 'Get support from local backers and organizations to bring your projects to life.',
      icon: '🌍'
    },
    { 
      title: 'Marketing Assistance', 
      description: 'Get help with marketing your project to reach a wider audience.',
      icon: '📈'
    },
    { 
      title: 'Legal Advice', 
      description: 'Receive legal advice to ensure your project complies with local regulations.',
      icon: '⚖️'
    }
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    category: '',
    description: ''
  });

  const categories = [
    'Technology',
    'Art & Design',
    'Film & Video',
    'Music',
    'Fashion',
    'Publishing',
    'Food',
    'Games',
    'Education'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Bring Your Ideas to Life</h1>
          <p>Join thousands of creators in Pakistan who have successfully funded their projects</p>
          <Link to="/signup" className={styles.ctaButton}>Start Your Project</Link>
        </div>
        <div className={styles.heroAnimation}></div>
      </section>

      <section id="services" className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="howItWorks" className={styles.howItWorks}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Create</h3>
            <p>Design your project and set your funding goal. Use our tools to create a compelling campaign that attracts backers.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Share</h3>
            <p>Launch your campaign and spread the word. Share your project with your network and on social media to gain support.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Fund</h3>
            <p>Watch your project come to life with community support. Keep your backers updated and deliver on your promises.</p>
          </div>
        </div>
      </section>

      <section id="startCampaign" className={styles.startCampaign}>
        <div className={styles.startCampaignContent}>
          <div className={styles.campaignText}>
            <h2>Start A Campaign</h2>
            <p>Ready to fund your idea?</p>
            <div className={styles.campaignFeatures}>
              <p>Join thousands of creators who have successfully funded their projects on our platform. Tell us about your idea, and we'll help you get started.</p>
              <ul>
                <li>Connect with backers who believe in your vision</li>
                <li>Join our community of 1M+ creators and backers</li>
              </ul>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.campaignForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="title">Project Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description">Project Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit Project Idea
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
