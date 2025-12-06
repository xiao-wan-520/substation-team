import React, { useState, useEffect, useRef } from 'react';
import { Circle, Flag, Rocket, Code2, Trophy } from 'lucide-react';
import { PlanWeek } from '../types';

const plans: PlanWeek[] = [
  {
    week: '第一天：环境与数据',
    number: 1,
    colorTheme: 'blue',
    tasks: ['团队组建与Git仓库初始化', 'Flask 环境配置与 SQLite 建表', 'Python 爬虫脚本编写与数据采集', '技术方案确认 (Flask + Qwen)'],
  },
  {
    week: '第二天：前后端开发',
    number: 2,
    colorTheme: 'green',
    tasks: ['HTML5/CSS3 静态页面构建', '原生 JS 实现前端交互逻辑', 'Flask 路由设计与 API 接口开发', '数据库增删改查 (CRUD) 实现'],
  },
  {
    week: '第三天：AI 接入与联调',
    number: 3,
    colorTheme: 'yellow',
    tasks: ['通义千问 (Qwen) API 接入封装', '前后端 Fetch/Ajax 数据联调', 'Prompt 提示词工程优化', '爬虫数据与 AI 分析功能整合'],
  },
  {
    week: '第四天：部署与汇报',
    number: 4,
    colorTheme: 'red',
    tasks: ['系统整体测试与 Bug 修复', '成果演示 PPT 制作', '项目本地部署与演示', '实训总结与代码归档'],
  },
];

const Plan: React.FC = () => {
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

  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case 'blue':
        return { bg: 'bg-blue-50', border: 'border-blue-500', circle: 'bg-blue-500', text: 'text-blue-600', icon: Flag, lightText: 'text-blue-100' };
      case 'green':
        return { bg: 'bg-green-50', border: 'border-green-500', circle: 'bg-green-500', text: 'text-green-600', icon: Code2, lightText: 'text-green-100' };
      case 'yellow':
        return { bg: 'bg-yellow-50', border: 'border-yellow-500', circle: 'bg-yellow-500', text: 'text-yellow-600', icon: Rocket, lightText: 'text-yellow-100' };
      case 'red':
        return { bg: 'bg-red-50', border: 'border-red-500', circle: 'bg-red-500', text: 'text-red-600', icon: Trophy, lightText: 'text-red-100' };
      default:
        return { bg: 'bg-gray-50', border: 'border-gray-500', circle: 'bg-gray-500', text: 'text-gray-600', icon: Circle, lightText: 'text-gray-100' };
    }
  };

  return (
    <section id="plan" className="py-24 bg-white scroll-mt-16 overflow-hidden">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className={`transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 relative tracking-tight">
            4天实训冲刺规划
          </h2>
          <p className="text-center text-gray-500 mb-20 max-w-2xl mx-auto text-lg">
            时间紧迫，任务艰巨。我们将通过精细化的日程管理，确保每一天都有实质性的产出。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[3rem] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-gray-200 z-0"></div>

          {plans.map((plan, index) => {
            const theme = getThemeClasses(plan.colorTheme);
            const Icon = theme.icon;
            return (
              <div 
                key={index}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`relative z-10 bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 flex flex-col h-full group overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Large Watermark Number */}
                <div className={`absolute -right-4 -bottom-8 text-9xl font-black ${theme.lightText} opacity-20 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2`}>
                  {plan.number}
                </div>

                <div className="flex flex-col items-center mb-6 text-center relative">
                  <div className={`w-16 h-16 ${theme.circle} rounded-2xl rotate-3 flex items-center justify-center text-white shadow-lg shadow-gray-200 mb-5 ring-4 ring-white transition-transform duration-300 group-hover:rotate-12`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{plan.week}</h3>
                  <div className={`h-1 w-12 ${theme.bg.replace('bg-', 'bg-').replace('50', '500')} mt-3 rounded-full opacity-30`}></div>
                </div>
                
                <ul className="space-y-4 flex-grow relative z-10">
                  {plan.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full ${theme.text} bg-current mt-1.5 mr-3 flex-shrink-0 ring-2 ring-white`} />
                      <span className="leading-relaxed group-hover:text-gray-900 transition-colors">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plan;