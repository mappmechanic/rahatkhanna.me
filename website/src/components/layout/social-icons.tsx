import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://x.com/mappmechanic" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
        <FaTwitter size={24} />
      </a>
      <a href="https://linkedin.com/in/rahatkh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/mappmechanic" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
        <FaGithub size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
