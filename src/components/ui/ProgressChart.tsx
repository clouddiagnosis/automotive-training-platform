import React from 'react';

interface ProgressData {
  day: string;
  completed: number;
  total: number;
}

interface ProgressChartProps {
  data: ProgressData[];
  title: string;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data, title }) => {
  const maxTotal = Math.max(...data.map(d => d.total));
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-6">{title}</h3>
      
      <div className="space-y-4">
        {data.map((item, index) => {
          const completionRate = (item.completed / item.total) * 100;
          const barHeight = (item.total / maxTotal) * 40;
          
          return (
            <div key={index} className="flex items-center space-x-4 space-x-reverse">
              <div className="w-16 text-sm text-gray-600 text-right">{item.day}</div>
              
              <div className="flex-1 relative">
                <div 
                  className="bg-gray-200 rounded-full"
                  style={{ height: `${Math.max(barHeight, 8)}px` }}
                >
                  <div 
                    className="bg-automotive-accent rounded-full transition-all duration-500"
                    style={{ 
                      height: '100%',
                      width: `${completionRate}%`
                    }}
                  />
                </div>
              </div>
              
              <div className="w-20 text-sm text-gray-600">
                <span className="font-semibold text-automotive-accent">{item.completed}</span>
                <span className="text-gray-400">/{item.total}</span>
              </div>
              
              <div className="w-12 text-sm text-automotive-success font-medium">
                {Math.round(completionRate)}%
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-automotive-accent">
              {data.reduce((sum, item) => sum + item.completed, 0)}
            </div>
            <div className="text-gray-500">دروس مكتملة</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-600">
              {data.reduce((sum, item) => sum + item.total, 0)}
            </div>
            <div className="text-gray-500">إجمالي الدروس</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-automotive-success">
              {Math.round((data.reduce((sum, item) => sum + item.completed, 0) / 
                         data.reduce((sum, item) => sum + item.total, 0)) * 100)}%
            </div>
            <div className="text-gray-500">معدل الإكمال</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;