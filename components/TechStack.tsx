import React from 'react';
import { Database, Brain, Layout, FileCode, FlaskConical, ScanSearch } from 'lucide-react';

const technologies = [
  { 
    name: 'HTML5 & CSS3', 
    icon: Layout, 
    desc: '语义化结构与响应式布局，构建稳健的页面骨架。', 
    color: 'text-orange-600', 
    bg: 'bg-orange-50',
    border: 'group-hover:border-orange-200'
  },
  { 
    name: 'JavaScript (ES6+)', 
    icon: FileCode, 
    desc: '原生 DOM 操作与异步交互，无需繁重框架即可实现动态体验。', 
    color: 'text-yellow-600', 
    bg: 'bg-yellow-50',
    border: 'group-hover:border-yellow-200'
  },
  { 
    name: 'Flask', 
    icon: FlaskConical, 
    desc: '轻量级 Python Web 框架，快速构建 RESTful API 服务。', 
    color: 'text-gray-700', 
    bg: 'bg-gray-100',
    border: 'group-hover:border-gray-300'
  },
  { 
    name: 'SQLite', 
    icon: Database, 
    desc: '轻量级嵌入式关系数据库，零配置，即插即用。', 
    color: 'text-blue-600', 
    bg: 'bg-blue-50',
    border: 'group-hover:border-blue-200'
  },
  { 
    name: '通义千问 (Qwen)', 
    icon: Brain, 
    desc: '集成阿里 Qwen-Turbo 模型，为系统注入智能分析能力。', 
    color: 'text-purple-600', 
    bg: 'bg-purple-50',
    border: 'group-hover:border-purple-200'
  },
  { 
    name: 'Python Crawler', 
    icon: ScanSearch, 
    desc: '自动化数据采集与清洗脚本，为 AI 分析提供数据养料。', 
    color: 'text-green-600', 
    bg: 'bg-green-50',
    border: 'group-hover:border-green-200'
  },
];

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 bg-gray-50 border-b border-gray-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-wider uppercase mb-3">
            Technology Stack
          </span>
          <h2 className="text-3xl font-bold text-gray-900">技术栈与工具链</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            我们选择轻量级、高效率的技术组合，专注于快速迭代与实际应用
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className={`group flex flex-col h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${tech.border}`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${tech.bg} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className={`w-6 h-6 ${tech.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{tech.name}</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed flex-grow">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;