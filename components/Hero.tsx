import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white min-h-[90vh] flex items-center justify-center overflow-hidden">
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
      
      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-16">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
            🚀 2024 年度实训项目
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-sm">
            Code the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Future</span>
          </h1>
          <p className="text-2xl md:text-4xl mb-8 font-light tracking-wide text-blue-100">
            AI 与我们同在！
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-10 text-gray-100">
            致力于打造卓越的编程团队，用技术创造未来，让AI赋能每一个项目。我们是 AAA 变电站技术室维护团队。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#plan" 
              className="px-8 py-3.5 rounded-full bg-white text-blue-700 font-bold hover:bg-gray-50 transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center"
            >
              查看实训规划
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#team" 
              className="px-8 py-3.5 rounded-full bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-semibold transition-all backdrop-blur-sm"
            >
              认识团队
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;