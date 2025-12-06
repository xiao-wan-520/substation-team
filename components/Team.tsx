import React, { useState, useEffect, useRef } from 'react';
import { Crown, Wrench, User, Github, Mail } from 'lucide-react';
import { TeamMember } from '../types';

const members: TeamMember[] = [
  {
    name: '李恩祺',
    role: '组长',
    description: '负责团队整体协调与项目管理',
    icon: Crown,
    bgClass: 'bg-blue-100',
    colorClass: 'text-blue-600',
    iconColorClass: 'text-blue-600',
  },
  {
    name: '万仁浩',
    role: '技术支持',
    description: '负责技术难题解决与架构设计',
    icon: Wrench,
    bgClass: 'bg-green-100',
    colorClass: 'text-green-600',
    iconColorClass: 'text-green-600',
  },
  {
    name: '唐必文',
    role: '普通组员',
    description: '负责功能模块开发与实现',
    icon: User,
    bgClass: 'bg-purple-100',
    colorClass: 'text-purple-600',
    iconColorClass: 'text-purple-600',
  },
  {
    name: '邱俊涛',
    role: '普通组员',
    description: '负责功能模块开发与测试',
    icon: User,
    bgClass: 'bg-orange-100',
    colorClass: 'text-orange-600',
    iconColorClass: 'text-orange-600',
  },
];

const Team: React.FC = () => {
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
    <section id="team" className="py-24 bg-white scroll-mt-16">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className={`transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">团队成员</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              这是一个充满活力与技术的团队，每位成员都发挥着关键作用
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div 
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group relative bg-white rounded-2xl p-8 text-center transition-all duration-500 ease-out border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 group-hover:via-blue-500 transition-all duration-500"></div>
              
              <div className={`w-28 h-28 ${member.bgClass} rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 ring-4 ring-white shadow-md`}>
                <member.icon className={`w-12 h-12 ${member.iconColorClass}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 ${member.bgClass} ${member.colorClass}`}>
                {member.role}
              </div>
              
              <p className="text-gray-600 text-sm mb-8 leading-relaxed min-h-[40px] border-t border-gray-50 pt-4 group-hover:border-transparent transition-colors">{member.description}</p>
              
              <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <button className="text-gray-400 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-full transition-all">
                  <Github className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-all">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;