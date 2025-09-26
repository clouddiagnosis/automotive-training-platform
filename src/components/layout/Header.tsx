import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-automotive-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-automotive-accent rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">🚗</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">منصة تدريب السيارات</h1>
              <p className="text-sm text-blue-200">التدريب الذكي للفنيين</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6 space-x-reverse">
            <a href="#courses" className="hover:text-blue-200 transition-colors">الدورات</a>
            <a href="#progress" className="hover:text-blue-200 transition-colors">التقدم</a>
            <a href="#assessments" className="hover:text-blue-200 transition-colors">الاختبارات</a>
            <a href="#profile" className="hover:text-blue-200 transition-colors">الملف الشخصي</a>
          </nav>
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <button className="bg-automotive-accent hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors">
              تسجيل الدخول
            </button>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;