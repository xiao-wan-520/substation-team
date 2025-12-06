import React from 'react';
import { ArrowRight, Timer, Sparkles, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 text-white min-h-[95vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Gradients & Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-950 pointer-events-none"></div>
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      {/* Decorative Blur Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in-up">
          {/* Badge Group */}
          <div className="flex justify-center gap-4 mb-10">
            <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-sm font-medium backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              2025 年度极速实训
            </span>
            <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-200 text-sm font-medium backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <Timer className="w-4 h-4 mr-2" />
              96小时极限冲刺
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight drop-shadow-2xl">
            Code the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 animate-gradient-x">Future</span>
          </h1>
          <p className="text-2xl md:text-4xl mb-8 font-light tracking-wide text-blue-100/90">
            AI 赋能 · 极速构建 · 智慧变电
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 text-slate-300 font-normal">
            AAA 变电站技术室维护团队 —— 在 96 小时内挑战极限，将 AI 技术融入软件开发，重新定义技术实训。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a 
              href="#plan" 
              className="group relative px-8 py-4 rounded-full bg-white text-blue-900 font-bold hover:bg-blue-50 transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)] flex items-center justify-center min-w-[180px] overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                查看冲刺计划
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#team" 
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-all backdrop-blur-sm flex items-center justify-center min-w-[180px] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:border-white/30"
            >
              认识团队
            </a>
          </div>

          {/* Floating Terminal Window Visual with Glow */}
          <div className="relative max-w-2xl mx-auto group">
            {/* Glow effect behind terminal */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-lg overflow-hidden border border-slate-700/50 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono flex items-center select-none">
                  <Terminal className="w-3 h-3 mr-2" />
                  root@aaa-substation:~
                </div>
                <div className="w-10"></div> {/* Spacer for centering */}
              </div>
              <div className="p-6 text-left font-mono text-sm sm:text-base h-48 overflow-hidden flex flex-col justify-end bg-slate-950/50">
                <div className="text-slate-300 space-y-2">
                  <p><span className="text-blue-400 font-bold">➜</span> <span className="text-cyan-400">~</span> <span className="text-yellow-300">python</span> deploy_system.py --sprint=96h</p>
                  <p className="opacity-0 animate-[fadeIn_0.5s_ease-out_0.5s_forwards] text-slate-400">[INFO] Initializing AAA Tech Core v2.0...</p>
                  <p className="opacity-0 animate-[fadeIn_0.5s_ease-out_1.0s_forwards]">[INFO] Loading AI Model: <span className="text-cyan-300 font-bold">Qwen-Turbo</span>...</p>
                  <p className="opacity-0 animate-[fadeIn_0.5s_ease-out_1.5s_forwards]">[INFO] Connecting to SQLite Database... <span className="text-green-400">OK</span></p>
                  <p className="opacity-0 animate-[fadeIn_0.5s_ease-out_2.0s_forwards]">[SUCCESS] System Online. <span className="animate-pulse text-green-300 font-bold">Ready to Code.</span> <span className="animate-blink">_</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;