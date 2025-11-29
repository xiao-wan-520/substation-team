import React from 'react';
import { Crown, Wrench, User } from 'lucide-react';
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
  return (
    <section id="team" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 relative">
          团队成员
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600 rounded"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:shadow-xl"
            >
              <div className={`w-24 h-24 ${member.bgClass} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                <member.icon className={`w-10 h-10 ${member.iconColorClass}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className={`${member.colorClass} font-semibold mb-3`}>{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;