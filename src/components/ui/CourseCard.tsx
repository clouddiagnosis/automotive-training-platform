import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  progress: number;
  duration: string;
  level: 'مبتدئ' | 'متوسط' | 'متقدم';
  icon: string;
  isCompleted?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  progress,
  duration,
  level,
  icon,
  isCompleted = false
}) => {
  const levelColors = {
    'مبتدئ': 'bg-green-100 text-green-800',
    'متوسط': 'bg-yellow-100 text-yellow-800',
    'متقدم': 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 bg-automotive-accent rounded-lg flex items-center justify-center text-white text-xl">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{title}</h3>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${levelColors[level]}`}>
                {level}
              </span>
            </div>
          </div>
          {isCompleted && (
            <div className="w-8 h-8 bg-automotive-success rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>التقدم</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-automotive-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2 space-x-reverse">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration}</span>
          </div>
          <button className="text-automotive-accent hover:text-automotive-primary font-medium">
            {progress === 0 ? 'ابدأ الآن' : progress === 100 ? 'مراجعة' : 'متابعة'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;