import React from 'react';
import { Code, Github, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Code className="text-blue-400 w-8 h-8 mr-2" />
              <span className="font-bold text-xl">AAA 维护团队</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              致力于打造卓越的编程团队，用技术创造未来，让AI赋能每一个项目。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">快速导航</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#team" className="hover:text-blue-400 transition-colors">团队成员</a></li>
              <li><a href="#rules" className="hover:text-blue-400 transition-colors">管理规则</a></li>
              <li><a href="#plan" className="hover:text-blue-400 transition-colors">实训规划</a></li>
              <li><a href="#risk" className="hover:text-blue-400 transition-colors">风险应对</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">联系我们</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>AAA 变电站技术室<br/>中国, 某省某市</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>contact@aaa-team.com</span>
              </div>
              <div className="flex items-center sm:col-span-2">
                <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-xs text-blue-300 border border-gray-700">
                  Code the Future, AI 与我们同在！
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AAA 变电站技术室维护团队. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Design & Built with ❤️ by AAA Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;