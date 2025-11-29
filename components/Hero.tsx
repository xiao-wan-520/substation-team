import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Code the Future
        </h1>
        <p className="text-xl md:text-3xl mb-8 font-light">
          AI 与我们同在！
        </p>
        <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
          致力于打造卓越的编程团队，用技术创造未来，让AI赋能每一个项目
        </p>
      </div>
    </section>
  );
};

export default Hero;