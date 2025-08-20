import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { Heart, X, MapPin, Calendar } from 'lucide-react';
import type { User } from '../types';

interface SwipeCardProps {
  user: User;
  onSwipe: (direction: 'left' | 'right') => void;
  isTop?: boolean;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ user, onSwipe, isTop = false }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [exitX, setExitX] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;
    
    if (info.offset.x > threshold) {
      setExitX(200);
      onSwipe('right');
    } else if (info.offset.x < -threshold) {
      setExitX(-200);
      onSwipe('left');
    }
  };

  const handleLike = () => {
    setExitX(200);
    onSwipe('right');
  };

  const handlePass = () => {
    setExitX(-200);
    onSwipe('left');
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === user.photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? user.photos.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      className={`absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing ${
        isTop ? 'z-20' : 'z-10'
      }`}
      style={{
        x,
        rotate,
        opacity: isTop ? opacity : 1,
      }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={exitX !== 0 ? { x: exitX } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Photo Section */}
      <div className="relative h-3/5 overflow-hidden">
        <img
          src={user.photos[currentPhotoIndex]}
          alt={user.name}
          className="w-full h-full object-cover"
        />
        
        {/* Photo Navigation */}
        <div className="absolute top-4 left-4 right-4 flex space-x-1">
          {user.photos.map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-1 rounded-full ${
                index === currentPhotoIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Photo Navigation Buttons */}
        <button
          onClick={prevPhoto}
          className="absolute left-0 top-0 w-1/2 h-full z-10"
        />
        <button
          onClick={nextPhoto}
          className="absolute right-0 top-0 w-1/2 h-full z-10"
        />

        {/* Verified Badge */}
        {user.verified && (
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            ✓ Verified
          </div>
        )}

        {/* Swipe Indicators */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: useTransform(x, [0, 100], [0, 1]),
          }}
        >
          <div className="bg-green-500 text-white px-6 py-3 rounded-full font-bold text-xl transform rotate-12">
            LIKE
          </div>
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: useTransform(x, [-100, 0], [1, 0]),
          }}
        >
          <div className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-xl transform -rotate-12">
            NOPE
          </div>
        </motion.div>
      </div>

      {/* Info Section */}
      <div className="p-6 h-2/5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-gray-800">
              {user.name}, {user.age}
            </h2>
          </div>
          
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{user.location}</span>
          </div>

          <p className="text-gray-700 text-sm mb-3 line-clamp-2">
            {user.bio}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {user.interests.slice(0, 3).map((interest, index) => (
              <span
                key={index}
                className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium"
              >
                {interest}
              </span>
            ))}
            {user.interests.length > 3 && (
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                +{user.interests.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        {isTop && (
          <div className="flex justify-center space-x-4">
            <button
              onClick={handlePass}
              className="bg-white border-2 border-gray-300 rounded-full p-4 hover:border-red-500 hover:bg-red-50 transition-all transform hover:scale-110 shadow-lg"
            >
              <X className="w-6 h-6 text-gray-600 hover:text-red-500" />
            </button>
            <button
              onClick={handleLike}
              className="bg-white border-2 border-gray-300 rounded-full p-4 hover:border-green-500 hover:bg-green-50 transition-all transform hover:scale-110 shadow-lg"
            >
              <Heart className="w-6 h-6 text-gray-600 hover:text-green-500" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SwipeCard;