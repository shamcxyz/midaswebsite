import React from 'react';

const Step = ({ icon, title, description }) => (
  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="font-semibold text-lg text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default Step;
