import React, { useState, useEffect, useRef } from 'react';
import { Bot, Zap, ShieldCheck, Activity, BarChart3, Globe } from 'lucide-react';

const features = [
  {
    title: "AI 智能分析",
    desc: "接入通义千问大模型，对变电站日志进行语义分析，自动识别异常模式与潜在风险。",
    icon: Bot,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "实时状态监控",
    desc: "基于 Flask 构建低延迟 API，配合原生 JS 实现毫秒级数据刷新，设备状态一目了然。",
    icon: Activity,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "轻量级架构",
    desc: "摒弃繁重框架，采用 HTML5 + CSS3 + SQLite，在保证性能的同时极大降低部署门槛。",
    icon: Zap,
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    title: "数据可视化",
    desc: "将枯燥的电力数据转化为直观的动态图表，为管理层提供清晰的决策支持。",
    icon: BarChart3,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    title: "自动化采集",
    desc: "定制化 Python 爬虫定时抓取行业数据与天气信息，丰富系统数据维度。",
    icon: Globe,
    color: "text-cyan-600",
    bg: "bg-cyan-50"
  },
  {
    title: "安全可靠",
    desc: "本地化 SQLite 存储配合严格的 API 鉴权，确保变电站敏感数据的安全性。",
    icon: ShieldCheck,
    color: "text-red-600",
    bg: "bg-red-50"
  }
];

const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className={`text-center mb-16 transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-3">
            Core Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">系统核心能力</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            不只是简单的 CRUD，我们正在构建一个具备 AI 洞察力的现代化运维辅助系统
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`group p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;