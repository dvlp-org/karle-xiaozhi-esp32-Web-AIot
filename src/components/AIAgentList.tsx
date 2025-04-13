'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../app/aiagent.css';
import '@/app/common.css';

interface AIAgent {
  id: number;
  name: string;
  clientSessionId: string;
  deviceId: string;
  clientId: string;
  connectTime: string;
  disconnectTime: string;
  status: number;
}

export default function AIAgentList() {
  const router = useRouter();
  const [agents, setAgents] = useState<AIAgent[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newAgentName, setNewAgentName] = useState('');

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch('/api/xz/getDeviceList');
        const data = await response.json();
        if (data.code === 200) {
          setAgents(data.data);
        } else {
          console.error('获取设备列表失败:', data.msg);
        }
      } catch (error) {
        console.error('获取设备列表出错:', error);
      }
    };

    fetchDevices();
  }, []);

  const handleAddAgent = () => {
    if (!newAgentName.trim()) {
      alert('请输入智能体名称');
      return;
    }

    const newAgent: AIAgent = {
      id: Date.now(),
      name: newAgentName.trim(),
      clientId: '湾湾小何',
      clientSessionId: '7 小时前',
      disconnectTime: 'DeepSeek V3 0324',
      deviceId: 'device_' + Date.now(), // 生成一个临时的设备ID
      connectTime: new Date().toISOString(), // 设置当前时间为连接时间
      status: 1 // 设置默认状态为1
      
    };

    setAgents([...agents, newAgent]);
    setNewAgentName('');
    setShowModal(false);
  };

  const handleDeleteAgent = async (id: string) => {
    try {
      const response = await fetch('/api/xz/deleteDevice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `id=${id}`
      });
      const data = await response.json();
      if (data.code === 200) {
        alert('删除设备成功: ' );
        setAgents(agents.filter(agent => agent.id+"" !== id));
      } else {
        console.error('删除设备失败:', data.msg);
        alert('删除设备失败: ' + data.msg);
      }
    } catch (error) {
      console.error('删除设备出错:', error);
      alert('删除设备出错，请稍后重试');
    }
  };

  return (
    <div>
      <main>
        <div className="container-chrild">
          <div className="breadcrumb">
            <span>控制台</span>
            <span>/</span>
            <span>智能体</span>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="new-ai-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            新建唤醒词
          </button>
          <div className="ai-list">
          {agents.map(agent => (
            <div key={agent.id} className="ai-item">
              <div className="ai-item-header">
                <h3>device_id：{agent.deviceId}</h3>
                <button
                  onClick={() => handleDeleteAgent(agent.id+"")}
                  className="close-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="ai-item-info">
                <div className="info-row">
                  <span className="label">客户端ID：</span>
                  <span className="value">{agent.clientId}</span>
                </div>
                <div className="info-row">
                  <span className="label">会话ID：</span>
                  <span className="value">{agent.clientSessionId}</span>
                </div>
                <div className="info-row">
                  <span className="label">最近对话connect_time：</span>
                  <span className="value">{agent.connectTime}</span>
                </div>
              </div>
              <div className="ai-item-tabs">
                <button className="tab-btn" onClick={() => router.push('/juesetting')}>配置角色</button>
                <button className="tab-btn" onClick={() => router.push('/device')}>管理设备</button>
                <button className="tab-btn">声纹识别</button>
                <button className="tab-btn">历史对话</button>
              </div>
            </div>
          ))}
        </div>
        </div>

       
      </main>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>新建唤醒词</h2>
              <button
                onClick={() => setShowModal(false)}
                className="close-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>
                  <span className="required">*</span>
                  唤醒词名称：
                </label>
                <input
                  type="text"
                  value={newAgentName}
                  onChange={(e) => setNewAgentName(e.target.value)}
                  placeholder="请输入智能体唤醒词"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => setShowModal(false)}>取消</button>
              <button onClick={handleAddAgent}>确定</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}