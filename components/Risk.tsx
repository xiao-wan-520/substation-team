import React, { useState, useEffect, useRef } from 'react';
import { Database, Cpu, Clock, ArrowRight } from 'lucide-react';
import { RiskItem } from '../types';

const risks: RiskItem[] = [
  {
    title: '时间紧迫',
    icon: Clock,
    iconColorClass: 'text-red-600',
    solutions: ['采用敏捷开发模式 (Scrum)', '每日两次快速站会同步', '非核心功能果断裁剪'],
  },
  {
    title: '算力/资源瓶颈',
    icon: Cpu,
    iconColorClass: 'text-blue-600',
    solutions: ['优先使用通义千问 Turbo/Plus 版', '云端 Colab/Kaggle 辅助数据处理', '利用爬虫预取数据减少实时请求'],
  },
  {
    title: '数据样本不足',
    icon: Database,
    iconColorClass: 'text-purple-600',
    solutions: ['使用合成数据增强 (Data Augmentation)', '利用 Few-shot Learning 技术', '爬虫定向采集扩充数据集'],
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
    <section id="risk" className="py-20 bg-gray-50 scroll-mt-16">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className={`transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 relative">
            风险挑战与应对策略
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            4天极限开发周期中，我们预判了以下核心风险并制定了Plan B
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {risks.map((risk, index) => (
            <div 
              key={index}
              style={{ transitionDelay: `${index * 200}ms` }}
              className={`bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:-translate-y-2 transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-50 rounded-xl mr-4 ring-1 ring-gray-100">
                    <risk.icon className={`w-8 h-8 ${risk.iconColorClass}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{risk.title}</h3>
              </div>
              <div className="text-gray-600 bg-gray-50/80 p-5 rounded-xl border border-gray-100">
                <p className="font-semibold mb-3 text-gray-900 border-b border-gray-200 pb-2 text-sm uppercase tracking-wide">解决方案</p>
                <ul className="space-y-3">
                  {risk.solutions.map((solution, sIndex) => (
                    <li key={sIndex} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">{solution}</span>
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