import React from 'react';
import { Check } from 'lucide-react';

const Feature = ({ title, description }) => (
  <div className="flex items-start space-x-3 p-4">
    <div className="mt-1 flex-shrink-0">
      <div className="bg-purple-500/10 rounded-full p-2">
        <Check className="w-5 h-5 text-purple-500" />
      </div>
    </div>
    <div>
      <h3 className="font-semibold text-lg text-white">{title}</h3>
      <p className="text-gray-300 mt-1">{description}</p>
    </div>
  </div>
);

export default Feature;
