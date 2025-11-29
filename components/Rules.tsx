import React from 'react';
import { Users, GitBranch, FileText, TrendingUp, Clock, MessageSquare, Check } from 'lucide-react';
import { RuleItem } from '../types';

const rules: RuleItem[] = [
  {
    title: '会议制度',
    icon: Users,
    iconColorClass: 'text-blue-600',
    items: ['每日站会：9:00-9:15', '周例会：周一上午10:00', '月度总结：每月最后一个周五'],
  },
  {
    title: '代码管理',
    icon: GitBranch,
    iconColorClass: 'text-green-600',
    items: ['Git Flow 工作流', '代码审查制度', '自动化测试覆盖'],
  },
  {
    title: '文档规范',
    icon: FileText,
    iconColorClass: 'text-purple-600',
    items: ['API文档标准化', '技术文档实时更新', '项目文档集中管理'],
  },
  {
    title: '质量控制',
    icon: TrendingUp,
    iconColorClass: 'text-orange-600',
    items: ['代码质量检查', '性能监控体系', '安全漏洞扫描'],
  },
  {
    title: '时间管理',
    icon: Clock,
    iconColorClass: 'text-red-600',
    items: ['任务时间估算', '进度跟踪系统', '里程碑管理'],
  },
  {
    title: '沟通礼仪',
    icon: MessageSquare,
    iconColorClass: 'text-indigo-600',
    items: ['及时响应原则', '专业沟通用语', '问题反馈机制'],
  },
];

const Rules: React.FC = () => {
  return (
    <section id="rules" className="py-16 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 relative">
          内部管理规则
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600 rounded"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((rule, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4 pb-2 border-b border-gray-100">
                <rule.icon className={`w-6 h-6 ${rule.iconColorClass} mr-3`} />
                <h3 className="text-xl font-semibold text-gray-800">{rule.title}</h3>
              </div>
              <ul className="text-gray-600 space-y-3">
                {rule.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;