import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink} from 'lucide-react';

interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tech: string[];
  images: string[];
  year: string;
  features: string[];
  challenges: string[];
  outcomes: string[];
  demoUrl?: string;
  liveUrl?: string;
}

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState<ProjectData | null>(null);

  const projectsData: { [key: string]: ProjectData } = {
    'travel-website': {
      id: 'travel-website',
      title: 'TITAN Travel 旅遊網站',
      category: 'Commercial Web Development',
      description: '專業的商業旅遊網站，具備完整的旅遊預訂系統和現代化的用戶介面設計',
      fullDescription: '這是一個委託開發的商業旅遊網站，原本是為同學的叔叔所開發，但因為部署後牽扯重大，後來作廢，目前轉為作品展示用途。網站具備完整的旅遊預訂功能，包含動態首頁、智慧搜尋、多頁面架構等現代化功能。採用React 18.2.0作為主要框架，結合Tailwind CSS進行響應式設計，使用Framer Motion實現流暢的動畫效果，並透過GitHub Pages進行自動化部署。',
      tech: ['React 18.2.0', 'Tailwind CSS 3.3.2', 'Framer Motion 12.11.3', 'Vite 6.3.5', 'React Router DOM 7.6.0', 'Swiper 11.2.6', 'React DatePicker 8.3.0', 'React Icons 5.5.0'],
      images: [
        'images/travel website/homepage.png',
        'images/travel website/main.png',
        'images/travel website/main2.png',
        'images/travel website/main3.png',
        'images/travel website/main4.png',
        'images/travel website/main5.png',
        'images/travel website/main6.png',
        'images/travel website/main7.png',
        'images/travel website/country_travel_page.png',
        'images/travel website/country_travel2.png',
        'images/travel website/date_search.png',
        'images/travel website/travel_inform.png',
        'images/travel website/plan.png',
        'images/travel website/Member Center.png',
        'images/travel website/order_track.png',
        'images/travel website/Customer Service Center.png',
        'images/travel website/Customer Service Center2.png',
        'images/travel website/Customer Service Center3.png'
      ],
      year: '2025',
      features: [
        '動態首頁：自動輪播英雄區塊、互動式旅遊分類展示',
        '智慧搜尋：日期範圍搜尋、行程篩選功能',
        '多頁面架構：景點詳情、行程總覽、會員專區、客服中心',
        '互動式導覽：滑鼠懸停效果、分類篩選、下拉式選單',
        '內容管理：旅遊資訊分類、套裝行程展示',
        '會員功能：訂單查詢、會員專區、客戶服務',
        '響應式設計：完美適配桌機、平板、手機',
        '流暢動畫：頁面切換動效、滾動觸發動畫',
        '精美的Splash Screen啟動畫面'
      ],
      challenges: [
        '設計符合商業需求的旅遊網站架構',
        '實現複雜的搜尋和篩選功能',
        '確保跨裝置的一致用戶體驗',
        '整合多種第三方套件和工具',
        '優化網站性能和載入速度'
      ],
      outcomes: [
        '努力完成商業級旅遊網站開發',
        '實現完整的旅遊預訂系統功能',
        '呈現現代化且專業的用戶介面',
        '累積前端開發和商業專案經驗',
        '建立完整的CI/CD自動化部署流程'
      ],
      demoUrl: 'https://twakatitan.github.io/travel-website'
    },
    'mcp': {
      id: 'mcp',
      title: 'MLOps Streaming MCP 工具',
      category: 'MLOps & Development',
      description: '全棧MLOps平台自動化工具，整合MCP框架實現機器學習模型生命週期的端到端自動化管理',
      fullDescription: '開發了一個全棧MLOps平台自動化工具，整合Model Context Protocol (MCP) 框架，實現機器學習模型生命週期的端到端自動化管理。此專案結合了Web自動化、API整合、以及智慧工具鏈，為MLOps團隊提供了完整的串流資料處理和模型管理解決方案。我把MCP裡的大部分功能用Streamlit寫成一個測試網站，包含智能身份識別系統、Web自動化引擎、MLOps配置管理和資料串流管理系統等核心模組，將手動MLOps操作自動化，提升團隊工作效率70%以上。',
      tech: ['Python', 'FastMCP', 'MCP Protocol', 'Playwright', 'Pydantic', 'Streamlit', 'RESTful APIs', 'JSON配置管理', '非同步程式設計'],
      images: [
        'images/mcp/MCP tool.png',
        'images/mcp/mcp web1.png',
        'images/mcp/mcp web2.png',
        'images/mcp/mcp web3.png',
        'images/mcp/mcp web4.png',
        'images/mcp/mcp web5.png',
        'images/mcp/mcp web6.png',
        'images/mcp/mcp web7.png',
        'images/mcp/mcp web8.png',
        'images/mcp/mcp web9.png',
        'images/mcp/mcp web10.png',
        'images/mcp/mcp web11.png'
      ],
      year: '2025',
      features: [
        '智能身份識別系統：自動提取API Keys、Project IDs、Connector IDs',
        'Web自動化引擎：基於Playwright的瀏覽器自動化',
        'MLOps配置管理：實驗配置的CRUD操作',
        '資料串流管理系統：支援多種時間間隔的排程配置',
        'Streamlit測試網站：將核心功能封裝成易用的Web介面',
        '模組化架構設計：統一21個工具函數',
        '快取機制：API響應時間提升50%',
        '完整的錯誤處理和日誌系統'
      ],
      challenges: [
        '設計並實現模組化架構',
        '整合MCP協議與AI開發環境',
        '確保系統穩定性和可靠性',
        '優化性能以處理大量數據',
        '建立完整的測試和文檔系統'
      ],
      outcomes: [
        '協助提高MLOps流程自動化程度70%+',
        '支援多專案並行管理',
        '實現與AI開發環境的整合',
        '提供詳細的操作文檔和工具指南（881行技術文檔）',
        '學習前瞻技術應用和全棧開發'
      ]
    },
    'streamlit': {
      id: 'streamlit',
      title: 'Streamlit 批量建模系統',
      category: 'Batch Training Platform',
      description: '基於Streamlit的企業級機器學習批量建模平台，為數據科學團隊提供直觀的Web介面進行大規模模型訓練與預測任務管理',
      fullDescription: '開發了一個基於Streamlit的企業級機器學習批量建模平台，為數據科學團隊提供直觀的Web介面進行大規模模型訓練與預測任務管理。該系統支援多資料集同時訓練、時間序列預測，以及完整的模型生命週期管理。採用模組化架構，包含訓練模組、預測模組、資料處理模組等12+個核心組件，實現前後端分離，透過RESTful API與後端機器學習平台整合。整合15+種機器學習演算法（Boosting、Trees、Linear、SVM、Deep Learning），支援AutoARIMA、Prophet、LSTM、ETS等專業時間序列演算法，並實現自動化特徵工程與批量訓練功能。',
      tech: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-learn', 'Plotly', 'Docker', 'RESTful API', 'AutoARIMA', 'Prophet', 'LSTM'],
      images: [
        'images/streamlit/streamlit 1.png',
        'images/streamlit/streamlit 2.png',
        'images/streamlit/streamlit 3.png',
        'images/streamlit/streamlit 4.png',
        'images/streamlit/streamlit 5.png',
        'images/streamlit/streamlit 6.png',
        'images/streamlit/streamlit 7.png',
        'images/streamlit/streamlit 8.png',
        'images/streamlit/streamlit 9.png',
        'images/streamlit/streamlit 10.png',
        'images/streamlit/streamlit 11.png',
        'images/streamlit/streamlit 12.png',
        'images/streamlit/streamlit 13.png',
        'images/streamlit/streamlit 14.png',
        'images/streamlit/streamlit 15.png'
      ],
      year: '2025',
      features: [
        '多演算法支援：整合15+種機器學習演算法（Boosting、Trees、Linear、SVM、Deep Learning）',
        '時間序列預測：實現AutoARIMA、Prophet、LSTM、ETS等專業時間序列演算法',
        '自動化特徵工程：智慧特徵選擇與處理，支援數值型、類別型、時間型等多種資料類型',
        '批量訓練：支援多資料集並行訓練，提升模型開發效率',
        '直觀的Web介面：降低非技術人員使用門檻',
        '配置管理功能：支援訓練參數保存與重複使用',
        '即時訓練進度監控與詳細日誌追蹤',
        '互動式資料視覺化：整合Plotly實現模型效能比較',
        'Docker容器化部署：提供開發、測試、生產環境的一致性'
      ],
      challenges: [
        '大型資料集處理：實現分批處理機制與記憶體優化，支援GB級資料集訓練',
        '時間序列複雜性：設計彈性的時間序列參數配置，支援多重時間序列與融合模型',
        '系統穩定性：實現異常處理機制與會話狀態管理，確保長時間訓練任務的穩定性',
        '模組化架構設計：建立可擴展的系統架構，支援多專案、多用戶需求'
      ],
      outcomes: [
        '學習提升：將原本需要數天的模型訓練流程縮短至數小時',
        '成功部署至生產環境，服務內部數據科學團隊',
        '支援10+種業務場景的模型訓練需求',
        '建立統一的模型開發流程，提升團隊協作效率',
        '程式碼行數：3000+行，涵蓋完整的ML pipeline'
      ],
      demoUrl: 'https://youtu.be/OvSXy2vQ8I0?si=u_KTGSzbsESdI34a'
    },
    'thesis': {
      id: 'thesis',
      title: 'AI影像輔助失智症診斷系統',
      category: 'AI & Computer Vision',
      description: '運用FDG-PET影像進行失智症早期診斷的AI輔助診斷系統，整合多種機器學習模型實現CN、MCI、AD三類別自動分類',
      fullDescription: '針對全球老齡化趨勢及失智症患者日增現況，開發AI影像輔助失智症診斷系統。使用ADNI公開資料集中1,650筆預處理後的FDG-PET影像（86個腦區SUVR數值），結合機器學習與深度學習方法，開發三類別（CN、MCI、AD）自動分類模型。採用SMOTE+TOMEK進行類別平衡，比較多種單一模型與集成方法，自行設計Bi-level分類器，最終Stacking模型整體準確率達72.96%。使用MonAI與SEResNet50架構實作深度學習模型，結合影像增強、Focal Loss與混合精度訓練，測試集達68%準確度。將最佳模型整合為原型醫療軟體，具備臨床早期輔助診斷價值。',
      tech: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'XGBoost', 'CatBoost', 'PyTorch', 'MonAI', 'SEResNet50', 'SMOTE', 'PyQt6'],
      images: [
        'images/thesis/dashboard.png',
        'images/thesis/dashboard after upload file.png',
        'images/thesis/model report page.png',
        'images/thesis/2D brain report.png',
        'images/thesis/3D brain report.png',
        'images/thesis/poster 1.png',
        'images/thesis/poster 2.png'
      ],
      year: '2024',
      features: [
        'FDG-PET影像分析：處理1,650筆ADNI資料集，86個腦區SUVR特徵',
        '多類別失智症分類：CN（正常認知）、MCI（輕度認知障礙）、AD（阿茲海默症）',
        'Bi-level分類策略：設計二階分類策略，顯著提升MCI過渡類別辨識能力',
        '多種機器學習模型：SVM、邏輯回歸、隨機森林、XGBoost、CatBoost、MLP',
        '集成學習方法：Stacking、Voting等方法，最終準確率達72.96%',
        '深度學習實現：MonAI+SEResNet50，結合影像增強與混合精度訓練',
        '不平衡資料處理：SMOTE+TOMEK平衡策略，多次隨機下採樣評估',
        '原型軟體整合：PyQt6開發診斷軟體介面，支援NIfTI影像上傳與即時推論',
        '3D/2D腦區影像呈現：視覺化腦部代謝情況與診斷結果'
      ],
      challenges: [
        '醫學影像數據複雜性：處理高維度FDG-PET影像與SUVR數值轉換',
        '類別不平衡問題：設計有效的資料平衡策略與評估方法',
        '多演算法整合：比較與優化多種機器學習與深度學習方法',
        'MCI分類挑戰：針對過渡期認知障礙的準確識別與分類',
        '臨床應用整合：將複雜AI模型包裝成易用的醫療輔助工具'
      ],
      outcomes: [
        '機器學習最佳模型：Stacking三類分類整體準確率達72.96%',
        '深度學習模型：SEResNet50架構準確率達68%',
        '努力開發原型醫療軟體：支援即時影像上傳與診斷推論',
        '臨床應用價值：期望提供醫師更精準的早期診斷輔助工具',
        '技術嘗試：自行設計的Bi-level分類策略提升分類效能',
        '完整技術文檔：涵蓋資料處理、模型訓練、軟體整合全流程',
        '操作演示：提供完整的系統操作展示影片'
      ],
      demoUrl: 'https://youtu.be/6I3m-HO-84w'
    },
    'cloud-website': {
      id: 'cloud-website',
      title: '分散式智慧影像檢索系統',
      category: 'Full-stack & AI',
      description: '基於微服務架構的智慧影像檢索與分析系統，整合AI模型和向量資料庫',
      fullDescription: '開發了一套基於微服務架構的智慧影像檢索與分析系統，整合了AI模型和向量資料庫，支援多模態搜尋和PDF文件處理。系統採用1個控制器+3個工作節點的分散式處理架構，實現智慧負載平衡和任務分配機制，具備心跳監控和自動故障恢復功能。整合BLIP圖像描述模型和Sentence Transformers嵌入，支援文字查詢、圖像相似性搜尋和PDF內容檢索，使用FAISS實現高效向量相似度計算。',
      tech: ['React', 'FastAPI', 'Docker', 'FAISS', 'Redis', 'AI', 'Microservices', 'BLIP', 'Sentence Transformers'],
      images: [
        'images/cloud-website/dashboard.png',
        'images/cloud-website/dashboard 2.png',
        'images/cloud-website/login.png',
        'images/cloud-website/register.png',
        'images/cloud-website/image page.png',
        'images/cloud-website/image page 2.png',
        'images/cloud-website/image page 3.png',
        'images/cloud-website/PDF search.png'
      ],
      year: '2024',
      features: [
        '分散式微服務架構',
        '多模態AI搜尋功能',
        '智慧負載平衡',
        '向量相似度計算',
        'JWT身份驗證',
        'Docker容器化部署',
        '即時狀態更新'
      ],
      challenges: [
        '設計分散式系統架構',
        '整合多種AI模型',
        '確保系統高可用性',
        '優化搜尋性能'
      ],
      outcomes: [
        '努力實現分散式處理',
        '提供高效的影像檢索',
        '支援多用戶並發使用',
        '持續改善系統穩定性'
      ],
      demoUrl: 'https://youtu.be/DvWgugLy2u0'
    }
  };

  useEffect(() => {
    if (projectId && projectsData[projectId]) {
      setProject(projectsData[projectId]);
    }
  }, [projectId]);

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-not-found">
          <h1>專案未找到</h1>
          <Link to="/portfolio" className="btn-primary">
            返回作品集
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <motion.div
        className="project-detail-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="project-header"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/portfolio" className="back-link">
            <ArrowLeft size={20} />
            <span>返回作品集</span>
          </Link>
          
          <div className="project-title-section">
            <span className="project-category">{project.category}</span>
            <h1>{project.title}</h1>
            <p className="project-year">{project.year}</p>
          </div>
        </motion.div>

        <motion.div 
          className="project-gallery"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="gallery-container">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="gallery-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            
            <button className="gallery-nav prev" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            <button className="gallery-nav next" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
            
            <div className="gallery-counter">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>
          
          <div className="gallery-thumbnails">
            {project.images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="project-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="project-description">
            <h2>專案概述</h2>
            <p>{project.fullDescription}</p>
            {project.demoUrl && (
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <ExternalLink size={20} />
                  <span>
                    {project.id === 'thesis' 
                      ? '觀看操作演示' 
                      : project.id === 'travel-website' 
                        ? '前往查看網站'
                        : '觀看操作演示'
                    }
                  </span>
                </a>
              </div>
            )}
          </div>

          <div className="project-tech-stack">
            <h3>技術棧</h3>
            <div className="tech-tags">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="project-details-grid">
            <div className="detail-section">
              <h3>主要功能</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h3>技術挑戰</h3>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h3>專案成果</h3>
              <ul>
                {project.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="project-navigation"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/portfolio" className="btn-secondary">
            查看更多專案
          </Link>
          <Link to="/contact" className="btn-primary">
            聯繫我
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail; 