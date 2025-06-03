import { motion } from 'framer-motion';

const About = () => {
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
    <div className="about-page">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="about-header" variants={itemVariants}>
          <h1>ABOUT ME</h1>
          <p className="about-subtitle">曾暘竣 Leo Tseng</p>
        </motion.div>

        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-section">
            <h2>個人簡介</h2>
            <p>
              我是曾暘竣，來自高雄，目前就讀於長庚大學人工智慧學系。
              我對 AI 技術充滿學習熱忱，特別在機器學習、MLOps 和全端開發領域持續精進。
              透過實習經驗，我努力學習業界的實際需求和技術應用。
            </p>
          </div>

          <div className="about-section">
            <h2>實習經驗</h2>
            
            <div className="experience-detail">
              <h3>MoBagel - Data Science Intern</h3>
              <p className="duration">目前 - 2025年6月30日</p>
              <div className="experience-description">
                <h4>主要工作內容：</h4>
                <ul>
                  <li><strong>Streamlit 批量建模平台開發與部署：</strong>
                    參與使用 Streamlit 開發批量建模網站，學習從前端介面設計到後端 API 串接的完整開發流程，
                    並協助部署到公司內部測試環境。
                  </li>
                  <li><strong>Dashboard 儀表板建置：</strong>
                    協助開發專案的 Dashboard 頁面，參與設計直觀且易於理解的視覺化儀表板，
                    學習如何根據需求逐步改善設計。
                  </li>
                  <li><strong>MLOps Streaming MCP 工具開發：</strong>
                    參與 MLOps Streaming 相關的 MCP Tool 開發，學習提高整個 MLOps 流程的自動化程度，
                    協助減少人工操作錯誤。
                  </li>
                </ul>
                
                <h4>收穫與成長：</h4>
                <p>
                  這段實習經驗不僅讓我學習了技術能力，也培養了跨部門團隊協作的技能，
                  學會如何將用戶需求轉化為具價值的產品。同事們都非常友善且樂於分享經驗，
                  讓我能快速融入團隊並持續學習成長。
                </p>
                
                <h4>有趣的辦公室體驗：</h4>
                <p>
                  進公司第二天下班時，因為玻璃門過於乾淨而直接撞上去，把臉型印在玻璃上。
                  更荒唐的是，某天吃完午餐後竟然再次犯下同樣錯誤，讓我想起小時候每次出遊都會撞玻璃窗的經歷。
                  希望玻璃可以不要擦得那麼乾淨！
                </p>
              </div>
            </div>

            <div className="experience-detail">
              <h3>AInnovate 愛創大數據有限公司 - RAG專案實習生 (財報組)</h3>
              <p className="duration">2024年7月1日 - 2024年8月23日</p>
              <div className="experience-description">
                <h4>主要專案：財報RAG 系統開發</h4>
                
                <h5>系統架構與技術學習：</h5>
                <ul>
                  <li><strong>雲端服務（AWS）：</strong>完成 AWS Academy 四週基礎課程，學習 Cloud Foundations、Cloud Developing、Machine Learning Foundations & NLP 等模組</li>
                  <li><strong>開發技術：</strong>學習並使用 Python、Selenium、Scrapy、FAISS、OpenSearch、LangChain、Boto3 等技術</li>
                  <li><strong>LLM整合：</strong>學習 Anthropic Claude、Amazon Bedrock 嵌入模型的應用</li>
                </ul>
                
                <h5>資料蒐集與預處理：</h5>
                <ul>
                  <li><strong>網路爬蟲：</strong>使用 Selenium 與 Scrapy 學習自動化下載公開資訊觀測站的上市櫃前五十大公司 2022–2023 年度財報 PDF</li>
                  <li><strong>文件處理：</strong>使用 marker-pdf 將財報 PDF 轉成 Markdown，透過自訂腳本將 Markdown 切分為適當大小的 chunk</li>
                </ul>
                
                <h5>語彙編碼與索引建立：</h5>
                <ul>
                  <li><strong>向量生成：</strong>學習使用 Amazon Bedrock 生成財報文本的語義向量</li>
                  <li><strong>向量資料庫：</strong>學習建立 FAISS 索引，將處理後的財報 chunk 與對應嵌入向量存入本地索引</li>
                  <li><strong>檢索優化：</strong>設計 query.py 測試檢索結果，針對不同查詢變體進行優化，處理相近公司名稱的檢索挑戰，平均檢索正確率達約 60%</li>
                </ul>
                
                <h5>LLM整合與驗證：</h5>
                <ul>
                  <li><strong>模型串接：</strong>學習將從 FAISS 檢索出的最相關財報 chunk 作為上下文，透過 Anthropic Claude 生成自然語言回答</li>
                  <li><strong>效能測試：</strong>使用 10 組基礎財報問題及其 4 種變體（Exact Match、Paraphrase、Addition/Omission、Typo），共 50 次測試，分析不同變體對 LLM 回答準確率的影響</li>
                </ul>
                
                <h5>系統設計與實作：</h5>
                <ul>
                  <li><strong>模組化開發：</strong>學習設計爬蟲模組 (selenium.py)、文件處理模組（marker → md_to_csvjson.py）、索引建立模組（insert.py）、查詢模組（query.py）、LLM 回答模組（LLM.py）</li>
                  <li><strong>端到端流程：</strong>從財報資料蒐集、清理、向量化到 LLM 回答的完整實現</li>
                </ul>
                
                <h4>主要收穫：</h4>
                <p>
                  透過這次財報組實習，我學習了完整的財報 RAG 系統開發流程，從上市櫃公司財報資料蒐集、處理、向量化到最終的 LLM 整合。
                  特別是在處理真實財報資料時的挑戰，以及如何設計有效的財務資訊檢索策略。
                  也學習了 AWS 雲端服務的基礎應用，以及如何進行系統性的測試與優化。
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>教育背景</h2>
            <div className="education-item">
              <h3>長庚大學</h3>
              <p>人工智慧學系</p>
              <p>專注於機器學習、深度學習、自然語言處理等領域的學習與研究</p>
            </div>
          </div>

          <div className="about-section">
            <h2>技能專長</h2>
            <div className="skills-detailed">
              <div className="skill-group">
                <h3>AI & Machine Learning</h3>
                <ul>
                  <li>RAG Systems (檢索增強生成)</li>
                  <li>Computer Vision (電腦視覺)</li>
                  <li>Natural Language Processing (自然語言處理)</li>
                  <li>MLOps (機器學習運維)</li>
                  <li>Deep Learning (深度學習)</li>
                </ul>
              </div>
              
              <div className="skill-group">
                <h3>Development</h3>
                <ul>
                  <li>React & TypeScript</li>
                  <li>FastAPI & Python</li>
                  <li>Streamlit</li>
                  <li>Docker</li>
                  <li>Full-stack Development</li>
                </ul>
              </div>
              
              <div className="skill-group">
                <h3>Data & Analytics</h3>
                <ul>
                  <li>FAISS Vector Database</li>
                  <li>Redis</li>
                  <li>Data Processing</li>
                  <li>Model Deployment</li>
                  <li>Data Visualization</li>
                </ul>
              </div>

              <div className="skill-group">
                <h3>Cloud & DevOps</h3>
                <ul>
                  <li>AWS (Amazon Web Services)</li>
                  <li>GitHub Actions</li>
                  <li>CI/CD Pipeline</li>
                  <li>Web Scraping (Selenium, Scrapy)</li>
                  <li>Version Control (Git)</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About; 