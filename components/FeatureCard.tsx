import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group text-left">
        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all text-indigo-600">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tighter uppercase">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed font-medium">{description}</p>
    </div>
);

export default FeatureCard;
