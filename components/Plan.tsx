import React from 'react';
import { Circle } from 'lucide-react';
import { PlanWeek } from '../types';

const plans: PlanWeek[] = [
  {
    week: '第一周',
    number: 1,
    colorTheme: 'blue',
    tasks: ['团队建设与角色分配', '技术栈学习与准备', '项目需求分析', '开发环境搭建'],
  },
  {
    week: '第二周',
    number: 2,
    colorTheme: 'green',
    tasks: ['架构设计与技术选型', '核心模块开发', '代码规范建立', '数据库设计'],
  },
  {
    week: '第三周',
    number: 3,
    colorTheme: 'yellow',
    tasks: ['优化算法', '开发设计用例>=30条'],
  },
  {
    week: '第四周',
    number: 4,
    colorTheme: 'red',
    tasks: ['成果展示', '编写复盘文档', '代码归档'],
  },
];

const Plan: React.FC = () => {
  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case 'blue':
        return { bg: 'bg-blue-50', border: 'border-blue-500', circle: 'bg-blue-500', text: 'text-blue-500' };
      case 'green':
        return { bg: 'bg-green-50', border: 'border-green-500', circle: 'bg-green-500', text: 'text-green-500' };
      case 'yellow':
        return { bg: 'bg-yellow-50', border: 'border-yellow-500', circle: 'bg-yellow-500', text: 'text-yellow-500' };
      case 'red':
        return { bg: 'bg-red-50', border: 'border-red-500', circle: 'bg-red-500', text: 'text-red-500' };
      default:
        return { bg: 'bg-gray-50', border: 'border-gray-500', circle: 'bg-gray-500', text: 'text-gray-500' };
    }
  };

  return (
    <section id="plan" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 relative">
          4周实训阶段目标规划
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const theme = getThemeClasses(plan.colorTheme);
            return (
              <div 
                key={index} 
                className={`${theme.bg} rounded-lg p-6 border-l-4 ${theme.border} shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 ${theme.circle} rounded-full flex items-center justify-center text-white font-bold shadow-sm`}>
                    {plan.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 ml-3">{plan.week}</h3>
                </div>
                <ul className="text-gray-700 space-y-2">
                  {plan.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start">
                      <Circle className={`w-3 h-3 ${theme.text} mt-2 mr-2 fill-current`} />
                      <span className="leading-relaxed">{task}</span>
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