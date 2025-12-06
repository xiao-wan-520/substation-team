import React, { useState, useEffect, useRef } from 'react';
import { Circle, Flag, Rocket, Code2, Trophy } from 'lucide-react';
import { PlanWeek } from '../types';

// Reusing PlanWeek interface but conceptually treating it as PlanDay
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
        return { bg: 'bg-blue-50', border: 'border-blue-500', circle: 'bg-blue-500', text: 'text-blue-600', icon: Flag };
      case 'green':
        return { bg: 'bg-green-50', border: 'border-green-500', circle: 'bg-green-500', text: 'text-green-600', icon: Code2 };
      case 'yellow':
        return { bg: 'bg-yellow-50', border: 'border-yellow-500', circle: 'bg-yellow-500', text: 'text-yellow-600', icon: Rocket };
      case 'red':
        return { bg: 'bg-red-50', border: 'border-red-500', circle: 'bg-red-500', text: 'text-red-600', icon: Trophy };
      default:
        return { bg: 'bg-gray-50', border: 'border-gray-500', circle: 'bg-gray-500', text: 'text-gray-600', icon: Circle };
    }
  };

  return (
    <section id="plan" className="py-20 bg-white scroll-mt-16 overflow-hidden">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className={`transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 relative">
            4天实训冲刺规划
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
            时间紧迫，任务艰巨。我们将通过精细化的日程管理，确保每一天都有实质性的产出。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop only) - z-0 to stay behind cards but needs relative parent */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-1 bg-gray-100 z-0"></div>

          {plans.map((plan, index) => {
            const theme = getThemeClasses(plan.colorTheme);
            const Icon = theme.icon;
            return (
              <div 
                key={index}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`relative z-10 ${theme.bg} rounded-xl p-6 border-t-4 ${theme.border} shadow-lg hover:shadow-xl transition-all duration-700 ease-out transform hover:-translate-y-2 flex flex-col h-full ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex flex-col items-center mb-6 text-center">
                  <div className={`w-14 h-14 ${theme.circle} rounded-2xl rotate-3 flex items-center justify-center text-white shadow-md mb-4 ring-4 ring-white`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{plan.week}</h3>
                  <div className="h-1 w-10 bg-gray-200 mt-2 rounded-full"></div>
                </div>
                <ul className="space-y-3 flex-grow">
                  {plan.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full ${theme.text} bg-current mt-1.5 mr-2 flex-shrink-0`} />
                      <span className="leading-snug">{task}</span>
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