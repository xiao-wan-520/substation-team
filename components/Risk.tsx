import React, { useState, useEffect, useRef } from 'react';
import { Database, Cpu, UserX, ArrowRight } from 'lucide-react';
import { RiskItem } from '../types';

const risks: RiskItem[] = [
  {
    title: '数据不足',
    icon: Database,
    iconColorClass: 'text-red-600',
    solutions: ['采用数据增强技术', '公开数据集混合训练'],
  },
  {
    title: '算力受限',
    icon: Cpu,
    iconColorClass: 'text-blue-600',
    solutions: ['使用 Colab/Kaggle GPU', '夜间离线训练'],
  },
  {
    title: '人员请假',
    icon: UserX,
    iconColorClass: 'text-purple-600',
    solutions: ['提前1天告知', '任务流入"待认领池"', '组长重新分配'],
  },
];

const Risk: React.FC = () => {
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
    <section id="risk" className="py-16 bg-gray-50 scroll-mt-16">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className={`transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 relative">
            风险与应对
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600 rounded"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {risks.map((risk, index) => (
            <div 
              key={index}
              style={{ transitionDelay: `${index * 200}ms` }}
              className={`bg-white rounded-lg shadow-lg p-6 hover:-translate-y-1 transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 rounded-full mr-4">
                    <risk.icon className={`w-6 h-6 ${risk.iconColorClass}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{risk.title}</h3>
              </div>
              <div className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                <p className="font-medium mb-3 text-gray-900 border-b border-gray-200 pb-2">应对方案：</p>
                <ul className="space-y-2">
                  {risk.solutions.map((solution, sIndex) => (
                    <li key={sIndex} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Risk;