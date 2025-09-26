import React, { useState } from 'react';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import CourseCard from './ui/CourseCard';
import ProgressChart from './ui/ProgressChart';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const courses = [
    {
      title: 'أساسيات الكهرباء في السيارات',
      description: 'تعلم المبادئ الأساسية للأنظمة الكهربائية في السيارات الحديثة',
      progress: 75,
      duration: '4 ساعات',
      level: 'مبتدئ' as const,
      icon: '⚡',
      isCompleted: false
    },
    {
      title: 'تشخيص أعطال المحرك',
      description: 'طرق فعالة لتشخيص وإصلاح مشاكل المحرك باستخدام أدوات التشخيص الحديثة',
      progress: 100,
      duration: '6 ساعات',
      level: 'متوسط' as const,
      icon: '🔧',
      isCompleted: true
    },
    {
      title: 'برمجة وحدات التحكم الإلكترونية',
      description: 'تعلم كيفية برمجة وتحديث وحدات التحكم الإلكترونية (ECU) في السيارات',
      progress: 30,
      duration: '8 ساعات',
      level: 'متقدم' as const,
      icon: '💻',
      isCompleted: false
    },
    {
      title: 'أنظمة الفرامل المتقدمة',
      description: 'دراسة شاملة لأنظمة الفرامل الحديثة وتقنيات الأمان',
      progress: 0,
      duration: '5 ساعات',
      level: 'متوسط' as const,
      icon: '🚗',
      isCompleted: false
    }
  ];

  const progressData = [
    { day: 'السبت', completed: 3, total: 5 },
    { day: 'الأحد', completed: 4, total: 6 },
    { day: 'الاثنين', completed: 2, total: 4 },
    { day: 'الثلاثاء', completed: 5, total: 7 },
    { day: 'الأربعاء', completed: 3, total: 5 },
    { day: 'الخميس', completed: 6, total: 8 },
    { day: 'الجمعة', completed: 4, total: 6 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 md:mr-80">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">مرحباً بك في منصة التدريب</h2>
            <p className="text-gray-600">استمر في رحلتك التعليمية في مجال صيانة السيارات</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-automotive-accent rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📚</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-bold text-gray-800">12</h3>
                  <p className="text-gray-600 text-sm">دورة متاحة</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-automotive-success rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">✅</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-bold text-gray-800">5</h3>
                  <p className="text-gray-600 text-sm">دورة مكتملة</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-automotive-warning rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-bold text-gray-800">850</h3>
                  <p className="text-gray-600 text-sm">نقطة إنجاز</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-automotive-danger rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">⏱️</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-bold text-gray-800">45</h3>
                  <p className="text-gray-600 text-sm">ساعة تدريب</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Courses Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">دوراتك الحالية</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </div>

            {/* Progress Section */}
            <div className="lg:col-span-1">
              <ProgressChart 
                data={progressData} 
                title="تقدمك هذا الأسبوع"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">إجراءات سريعة</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-2xl mb-2">📖</span>
                <span className="text-sm font-medium">استئناف الدرس</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-2xl mb-2">📝</span>
                <span className="text-sm font-medium">اختبار سريع</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-2xl mb-2">💬</span>
                <span className="text-sm font-medium">المنتدى</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-2xl mb-2">📞</span>
                <span className="text-sm font-medium">تواصل مع مدرب</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;