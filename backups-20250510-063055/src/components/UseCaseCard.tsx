import React, { ReactNode } from 'react';

interface UseCaseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const UseCaseCard = ({ icon, title, description }: UseCaseCardProps) => (
  <div className="p-6 border border-gray-200 rounded-xl bg-white">
    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default UseCaseCard;
