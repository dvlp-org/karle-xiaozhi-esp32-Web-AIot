'use client';

import { useState } from 'react';
import './home.css';

interface AIItem {
  name: string;
  voiceType: string;
  languageModel: string;
  lastChat: string;
}

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [aiName, setAiName] = useState('');
  const [aiItems, setAiItems] = useState<AIItem[]>([]);

  const handleAddAI = () => {
    if (!aiName.trim()) {
      alert('请输入智能体名称');
      return;
    }

    const newAI: AIItem = {
      name: aiName,
      voiceType: '湾湾小何',
      languageModel: 'DeepSeek V3 0324',
      lastChat: '7 小时前'
    };

    setAiItems([...aiItems, newAI]);
    setAiName('');
    setShowModal(false);
  };

  const handleDeleteAI = (index: number) => {
    const newAiItems = aiItems.filter((_, i) => i !== index);
    setAiItems(newAiItems);
  };

  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className="nav-left">
            <h1>小智 AI</h1>
            <div className="nav-links">
              <a href="#" className="nav-link active">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                  <rect width="4" height="4" x="4" y="4" rx="1"></rect>
                  <rect width="4" height="4" x="4" y="12" rx="1"></rect>
                  <rect width="4" height="4" x="12" y="4" rx="1"></rect>
                  <rect width="4" height="4" x="12" y="12" rx="1"></rect>
                </svg>
                智能体
              </a>
              <a href="#" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
                声音复刻
              </a>
            </div>
          </div>
          <div className="nav-right">
            <span className="phone-number">+8618010180050</span>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="breadcrumb">
            <span>控制台</span>
            <span>/</span>
            <span>智能体</span>
          </div>

          <button className="new-ai-btn" onClick={() => setShowModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            新建智能体
          </button>

          <div className="ai-list">
            {aiItems.map((ai, index) => (
              <div key={index} className="ai-item">
                <div className="ai-item-header">
                  <h3>{ai.name}</h3>
                  <button className="close-btn" onClick={() => handleDeleteAI(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <div className="ai-item-info">
                  <div className="info-row">
                    <span className="label">角色音色：</span>
                    <span className="value">{ai.voiceType}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">语言模型：</span>
                    <span className="value">{ai.languageModel}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">最近对话：</span>
                    <span className="value">{ai.lastChat}</span>
                  </div>
                </div>
                <div className="ai-item-tabs">
                  <button className="tab-btn">配置角色</button>
                  <button className="tab-btn">声纹识别</button>
                  <button className="tab-btn">历史对话</button>
                  <button className="tab-btn">管理设备 (1)</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {showModal && (
        <div className="modal" id="newAIModal" onClick={(e) => {
          if (e.target === e.currentTarget) setShowModal(false);
        }}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>新建智能体</h2>
              <button className="close-modal-btn" onClick={() => setShowModal(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="aiName">
                  <span className="required">*</span>
                  智能体名称：
                </label>
                <input
                  type="text"
                  id="aiName"
                  placeholder="请输入智能体名称"
                  value={aiName}
                  onChange={(e) => setAiName(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={() => setShowModal(false)}>取消</button>
              <button className="confirm-btn" onClick={handleAddAI}>确定</button>
            </div>
          </div>
        </div>
      )}

      <footer>
        <p>© 2024 小智 AI 控制面板 2.0 粤ICP备202212173号-2</p>
      </footer>
    </div>
  );
}