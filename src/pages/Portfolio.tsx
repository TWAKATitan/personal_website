import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 'travel-website',
      title: 'TITAN Travel 旅遊網站',
      category: 'Commercial Web Development',
      description: '專業的商業旅遊網站，具備完整的旅遊預訂系統和現代化的用戶介面設計',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'React Router'],
      image: '/images/Cover/Cover_travel-website.png',
      year: '2025',
      liveUrl: 'https://twakatitan.github.io/travel-website'
    },
    {
      id: 'mcp',
      title: 'MLOps Streaming MCP 工具',
      category: 'MLOps & Development',
      description: '全棧MLOps平台自動化工具，整合MCP框架實現機器學習模型生命週期的端到端自動化管理',
      tech: ['Python', 'FastMCP', 'Playwright', 'Pydantic', 'Streamlit'],
      image: '/images/Cover/Cover_MCP.png',
      year: '2025'
    },
    {
      id: 'streamlit',
      title: 'Streamlit 批量建模系統',
      category: 'Batch Training Platform',
      description: '基於Streamlit的企業級機器學習批量建模平台，為數據科學團隊提供直觀的Web介面進行大規模模型訓練與預測任務管理',
      tech: ['Streamlit', 'Python', 'FastAPI', 'Machine Learning'],
      image: '/images/Cover/Cover_streamlit_batch_train.png',
      year: '2025'
    },
    {
      id: 'thesis',
      title: 'AI影像輔助失智症診斷系統',
      category: 'AI & Computer Vision',
      description: '運用FDG-PET影像進行失智症早期診斷的AI輔助診斷系統，整合多種機器學習模型',
      tech: ['Python', 'PyQt6', 'Computer Vision', 'Machine Learning', 'Medical AI'],
      image: '/images/Cover/Cover_thesis.png',
      year: '2024'
    },
    {
      id: 'cloud-website',
      title: '分散式智慧影像檢索系統',
      category: 'Full-stack & AI',
      description: '基於微服務架構的智慧影像檢索與分析系統，整合AI模型和向量資料庫',
      tech: ['React', 'FastAPI', 'Docker', 'FAISS', 'Redis', 'AI'],
      image: '/images/Cover/Cover_cloud-website.png',
      year: '2024'
    }
  ];

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
    <div className="portfolio-page">
      <motion.div
        className="portfolio-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="portfolio-header" variants={itemVariants}>
          <h1>PORTFOLIO</h1>
          <p className="portfolio-subtitle">我的專案作品集</p>
        </motion.div>

        <motion.div className="projects-grid" variants={itemVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <Link to={`/project/${project.id}`} className="view-project">
                    <ExternalLink size={20} />
                    <span>VIEW PROJECT</span>
                  </Link>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-demo">
                      <ExternalLink size={20} />
                      <span>LIVE DEMO</span>
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="portfolio-cta" variants={itemVariants}>
          <h2>想要了解更多？</h2>
          <p>歡迎查看我的詳細專案介紹或與我聯繫討論合作機會</p>
          <Link to="/contact" className="btn-primary">
            CONTACT ME
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio; 