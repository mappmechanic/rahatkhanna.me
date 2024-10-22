import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExpandableCardProps {
  id: number;
  title: string; 
  previewContent: React.ReactNode;
  children: React.ReactNode;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ 
  id, 
  title, // Destructure title
  previewContent,
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      <motion.div
        layoutId={`card-container-${id}`}
        onClick={toggleExpand}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white rounded-xl p-5 shadow-md cursor-pointer max-w-lg my-5 w-full"
      >
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        {!isExpanded && previewContent}
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-gray-800"
            onClick={toggleExpand}
          >
            <motion.div
              layoutId={`card-container-${id}`}
              className="bg-white rounded-xl p-8 shadow-lg max-w-2xl w-full m-4 overflow-y-auto max-h-[90vh] text-start"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">{title}</h3>
              {children}
              <motion.button
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={toggleExpand}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExpandableCard;
