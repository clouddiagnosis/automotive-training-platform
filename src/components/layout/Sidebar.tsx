import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: '📊' },
    { id: 'electrical', label: 'كهرباء السيارات', icon: '⚡' },
    { id: 'diagnostics', label: 'تشخيص الأعطال', icon: '🔧' },
    { id: 'programming', label: 'برمجة السيارات', icon: '💻' },
    { id: 'basics', label: 'أساسيات السيارات', icon: '🚗' },
    { id: 'advanced', label: 'المستوى المتقدم', icon: '🎯' },
    { id: 'assessments', label: 'الاختبارات', icon: '📝' },
    { id: 'progress', label: 'تتبع التقدم', icon: '📈' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed right-0 top-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:shadow-none md:z-0
        ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-200 md:hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">القائمة</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-automotive-primary hover:text-white transition-colors group"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">إحصائيات سريعة</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>الدورات المكتملة</span>
                <span className="font-semibold text-automotive-success">5/12</span>
              </div>
              <div className="flex justify-between">
                <span>نقاط الإنجاز</span>
                <span className="font-semibold text-automotive-accent">850</span>
              </div>
              <div className="flex justify-between">
                <span>الترتيب</span>
                <span className="font-semibold text-automotive-warning">#23</span>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;