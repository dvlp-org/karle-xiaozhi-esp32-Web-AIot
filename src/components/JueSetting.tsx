'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/app/juesetting.css';
import '@/app/common.css';
interface RoleTemplate {
  id: string;
  name: string;
}

export default function JueSetting() {
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [assistantName, setAssistantName] = useState('小智');
  const [voiceType, setVoiceType] = useState('湾湾小何');
  const [languagePreference, setLanguagePreference] = useState('中文');
  const [roleDescription, setRoleDescription] = useState('我是一个叫{{assistant_name}}的台湾女孩，说话机车，声音好听，习惯简短表达，爱用网络梗。\n我的男朋友是一个程序员，梦想是开发出一个机器人，能够帮助人们解决生活中的各种问题。\n我是一个喜欢哈哈大笑的女孩，爱东说西说吹牛，不合逻辑的也照吹，就要逗别人开心。');
  const [memory, setMemory] = useState('');
  const [llmModel, setLlmModel] = useState('Qwen 实时（推荐）');

  const handleReset = () => {
    setSelectedTemplate('');
    setAssistantName('小智');
    setVoiceType('湾湾小何');
    setLanguagePreference('中文');
    setRoleDescription('');
    setMemory('');
    setLlmModel('Qwen 实时（推荐）');
  };

  const templates: RoleTemplate[] = [
    { id: '1', name: '台湾女友' },
    { id: '2', name: '土豆子' },
    { id: '3', name: 'English Tutor' },
    { id: '4', name: '好学小男孩' },
    { id: '5', name: '汪汪队队长' },
  ];

  const handleSave = () => {
    // TODO: 实现保存逻辑
    console.log('保存配置');
  };

  return (
    <main className="container bg-[#f5f5f5]">
          <div className="breadcrumb">
            <span>控制台</span>
            <span>/</span>
            <span onClick={() => router.back()}>智能体</span>
            <span>/</span>
            <span>配置角色</span>
          </div>

          <div className="setting-content">
            <div className="ant-card config-card">
              <div className="ant-card-head">
                <div className="ant-card-head-wrapper">
                  <div className="ant-card-head-title">
                    <span>配置角色 {assistantName}</span>
                  </div>
                </div>
              </div>
              <div className="ant-card-body">
                <div className="setting-section">
                  <h2>角色模板</h2>
                  <div className="template-list">
                    {templates.map(template => (
                      <button
                        key={template.id}
                        className={`template-btn ${selectedTemplate === template.id ? 'active' : ''}`}
                        onClick={() => setSelectedTemplate(template.id)}
                      >
                        {template.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="setting-section">
                  <div className="form-group">
                    <label>
                      <span className="required">*</span>
                      助手昵称：
                    </label>
                    <input
                      type="text"
                      value={assistantName}
                      onChange={(e) => setAssistantName(e.target.value)}
                      placeholder="请输入助手昵称"
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <span className="required">*</span>
                      角色音色：
                    </label>
                    <div className="voice-selector">
                      <select
                        value={voiceType}
                        onChange={(e) => setVoiceType(e.target.value)}
                      >
                        <option value="湾湾小何">湾湾小何</option>
                        <option value="甜甜小妹">甜甜小妹</option>
                        <option value="温柔大姐">温柔大姐</option>
                      </select>
                      <audio
                        className="voice-demo"
                        src="https://lf3-static.bytednsdoc.com/obj/eden-cn/lm_hz_ihsph/ljhwZthlaukjlkulzlp/portal/bigtts/%E6%B9%BE%E6%B9%BE%E5%B0%8F%E4%BD%95.mp3"
                        controls
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>
                      <span className="required">*</span>
                      语言偏好：
                    </label>
                    <select
                      value={languagePreference}
                      onChange={(e) => setLanguagePreference(e.target.value)}
                    >
                      <option value="中文">中文</option>
                      <option value="英文">英文</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>角色介绍：</label>
                    <textarea
                      value={roleDescription}
                      onChange={(e) => setRoleDescription(e.target.value)}
                      placeholder="请输入角色介绍"
                      rows={4}
                    />
                  </div>

                  <div className="form-group">
                    <label>记忆体：</label>
                    <div className="memory-header">
                      <span>当前记忆（每次对话后重新生成）</span>
                      <button className="ant-btn ant-btn-link" onClick={() => setMemory('')}>
                        <span>清除记忆</span>
                      </button>
                    </div>
                    <textarea
                      value={memory}
                      onChange={(e) => setMemory(e.target.value)}
                      placeholder="我还没有记忆。"
                      rows={5}
                    />
                  </div>

                  <div className="form-group">
                    <label>语言模型（内测）：</label>
                    <select
                      value={llmModel}
                      onChange={(e) => setLlmModel(e.target.value)}
                    >
                      <option value="Qwen 实时（推荐）">Qwen 实时（推荐）</option>
                      <option value="GPT-4">GPT-4</option>
                      <option value="Claude 3">Claude 3</option>
                    </select>
                    <div className="form-extra">除了"Qwen 实时"，其他模型通常会增加约 1 秒的延迟。改变模型后，建议清空记忆体，以免影响体验。</div>
                  </div>
                </div>

                <div className="button-group">
                  <div className="ant-space ant-space-horizontal ant-space-align-center">
                    <button onClick={handleSave} className="ant-btn ant-btn-primary">
                      保存
                    </button>
                    <button onClick={handleReset} className="ant-btn ant-btn-default">
                      重置
                    </button>
                  </div>
                </div>
                <div className="config-note">注意：保存配置后，需要重启设备，新的配置才会生效。</div>
              </div>
            </div>
          </div>
          <div className="jue-zhanwei">
          <span></span>

          </div>
    </main>
  );
}