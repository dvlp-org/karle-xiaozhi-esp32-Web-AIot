"use client";

import AIAgentList from '@/components/AIAgentList';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <nav className="bg-[#001529] text-white py-3 ">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-normal text-white">小智 AI</h1>
            <div className="flex gap-4">
              <a href="#" className="text-white inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#4169E1]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                  <rect width="4" height="4" x="4" y="4" rx="1"></rect>
                  <rect width="4" height="4" x="4" y="12" rx="1"></rect>
                  <rect width="4" height="4" x="12" y="4" rx="1"></rect>
                  <rect width="4" height="4" x="12" y="12" rx="1"></rect>
                </svg>
                智能体
              </a>
              <a href="#" className="text-[rgba(255,255,255,0.65)] hover:text-white hover:bg-[rgba(255,255,255,0.1)] inline-flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
                声音复刻
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-[rgba(255,255,255,0.85)]">大歌吃饼</span>
          </div>
        </div>
      </nav>
      
      <AIAgentList />

      <footer className="bg-white py-4 fixed bottom-0 w-full">
        <div className="text-center text-gray-500 text-sm">
          © 2024 小智 AI 控制面板 2.0 粤ICP备202212173号-2
        </div>
      </footer>
    </div>
  );
}