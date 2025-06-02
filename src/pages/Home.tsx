import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="home">
      <div className="hero-section">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span>BASED IN 高雄, TAIWAN</span>
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="title-line">DATA SCIENCE</span>
            <span className="title-line">AI ENGINEER</span>
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            曾暘竣 Leo Tseng
          </motion.p>
          
          <motion.p className="hero-description" variants={itemVariants}>
            長庚大學人工智慧學系學生，持續學習機器學習、MLOps 和全端開發
          </motion.p>
          
          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link to="/portfolio" className="btn-primary">
              VIEW PROJECTS
            </Link>
            <Link to="/about" className="btn-secondary">
              ABOUT ME
            </Link>
          </motion.div>
          
          <motion.div className="social-links" variants={itemVariants}>
            <a href="mailto:leo2tseng@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
            <a href="https://github.com/TWAKATitan" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >

        </motion.div>
      </div>
      
      <div className="about-preview">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <span className="section-number">01</span>
            <h2>EXPERIENCE</h2>
          </div>
          
          <div className="experience-grid">
            <motion.div
              className="experience-item"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3>MoBagel</h3>
              <p className="role">Data Science Intern</p>
              <p className="duration">Current - Jun 2025</p>
              <p className="description">
                參與批量建模網站、Dashboard 建置、MLOps Streaming MCP 工具開發
              </p>
            </motion.div>
            
            <motion.div
              className="experience-item"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3>AInnovate 愛創大數據</h3>
              <p className="role">RAG專案實習生 (財報組)</p>
              <p className="duration">2024/07-2024/08</p>
              <p className="description">
                參與財報RAG專案開發，包含上市櫃公司財報資料的爬取、向量化建索引、LLM整合等工作
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="skills-preview">
        <motion.div
          className="skills-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>EXPERTISE</h2>
          </div>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>AI & MACHINE LEARNING</h3>
              <ul>
                <li>RAG Systems</li>
                <li>Computer Vision</li>
                <li>NLP</li>
                <li>MLOps</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>DEVELOPMENT</h3>
              <ul>
                <li>React & TypeScript</li>
                <li>FastAPI & Python</li>
                <li>Streamlit</li>
                <li>Docker</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>DATA & ANALYTICS</h3>
              <ul>
                <li>FAISS Vector DB</li>
                <li>Redis</li>
                <li>Data Processing</li>
                <li>Model Deployment</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 