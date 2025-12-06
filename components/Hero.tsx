import React from 'react';
import { ArrowRight, Timer, Sparkles, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white min-h-[95vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      {/* Decorative Blur Blobs - Adjusted for dark background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in-up">
          <div className="flex justify-center gap-4 mb-8">
            <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-200 text-sm font-medium backdrop-blur-md shadow-lg shadow-blue-500/10">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              2025 年度极速实训
            </span>
            <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-orange-500/10 border border-orange-400/30 text-orange-200 text-sm font-medium backdrop-blur-md shadow-lg shadow-orange-500/10">
              <Timer className="w-4 h-4 mr-2" />
              96小时极限冲刺
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight drop-shadow-xl">
            Code the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Future</span>
          </h1>
          <p className="text-2xl md:text-4xl mb-8 font-light tracking-wide text-blue-100">
            AI 赋能 · 极速构建 · 智慧变电
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 text-blue-50/90 font-normal">
            AAA 变电站技术室维护团队 —— 在 96 小时内挑战极限，将 AI 技术融入软件开发，重新定义技术实训。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <a 
              href="#plan" 
              className="px-8 py-4 rounded-full bg-white text-blue-900 font-bold hover:bg-blue-50 transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 flex items-center justify-center min-w-[180px]"
            >
              查看冲刺计划
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#team" 
              className="px-8 py-4 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold transition-all backdrop-blur-sm flex items-center justify-center min-w-[180px] hover:shadow-lg"
            >
              认识团队
            </a>
          </div>

          {/* Floating Terminal Window Visual */}
          <div className="max-w-2xl mx-auto bg-slate-900/80 backdrop-blur-md rounded-lg overflow-hidden border border-slate-700 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
            <div className="flex items-center px-4 py-2 bg-slate-800/80 border-b border-slate-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-xs text-slate-400 font-mono flex items-center">
                <Terminal className="w-3 h-3 mr-1" />
                root@aaa-substation:~
              </div>
            </div>
            <div className="p-4 text-left font-mono text-sm sm:text-base h-40 overflow-hidden flex flex-col justify-end">
              <div className="text-green-400 space-y-1">
                <p><span className="text-blue-400">➜</span> <span className="text-yellow-300">~</span> python deploy_system.py --sprint=96h</p>
                <p className="opacity-0 animate-[fadeIn_0.5s_ease-out_0.5s_forwards]">[INFO] Initializing AAA Tech Core...</p>
                <p className="opacity-0 animate-[fadeIn_0.5s_ease-out_1.0s_forwards]">[INFO] Loading AI Model: <span className="text-cyan-300">Qwen-Turbo</span>...</p>
                <p className="opacity-0 animate-[fadeIn_0.5s_ease-out_1.5s_forwards]">[INFO] Connecting to SQLite Database... <span className="text-green-300">OK</span></p>
                <p className="opacity-0 animate-[fadeIn_0.5s_ease-out_2.0s_forwards]">[SUCCESS] System Online. <span className="animate-pulse">Ready to Code.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;