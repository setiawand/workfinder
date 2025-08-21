import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { Heart, X, MapPin, Building2, DollarSign, Clock, Users } from 'lucide-react';
import type { Job } from '../types';

interface SwipeCardProps {
  job: Job;
  onSwipe: (direction: 'left' | 'right') => void;
  isTop?: boolean;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ job, onSwipe, isTop = false }) => {
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);
  const [exitX, setExitX] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
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

  const nextInfo = () => {
    setCurrentInfoIndex((prev) => 
      prev === 2 ? 0 : prev + 1
    );
  };

  const prevInfo = () => {
    setCurrentInfoIndex((prev) => 
      prev === 0 ? 2 : prev - 1
    );
  };

  const formatSalary = (min: number, max: number, currency: string) => {
    const formatNumber = (num: number) => {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
      }
      return (num / 1000).toFixed(0) + 'K';
    };
    return `${formatNumber(min)} - ${formatNumber(max)} ${currency}`;
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
      {/* Company Header Section */}
      <div className="relative h-2/5 bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Company Logo */}
        <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <Image
            src={job.company.logo}
            alt={job.company.name}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Info Navigation */}
        <div className="absolute top-4 left-4 right-4 flex space-x-1">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`flex-1 h-1 rounded-full ${
                index === currentInfoIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Info Navigation Buttons */}
        <button
          onClick={prevInfo}
          className="absolute left-0 top-0 w-1/2 h-full z-10"
        />
        <button
          onClick={nextInfo}
          className="absolute right-0 top-0 w-1/2 h-full z-10"
        />
        
        {/* Job Title & Company */}
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-2xl font-bold text-white mb-1">{job.title}</h1>
          <p className="text-white/90 text-lg">{job.company.name}</p>
        </div>

        {/* Verified Badge */}
        {job.company.verified && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
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
            INTERESTED
          </div>
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: useTransform(x, [-100, 0], [1, 0]),
          }}
        >
          <div className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-xl transform -rotate-12">
            SKIP
          </div>
        </motion.div>
      </div>

      {/* Info Section */}
      <div className="p-6 h-3/5 flex flex-col justify-between">
        <div className="flex-1 overflow-hidden">
          {currentInfoIndex === 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{job.location}</span>
                  {job.remote && <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Remote</span>}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm capitalize">{job.type}</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-600">
                <DollarSign className="w-4 h-4 mr-1" />
                <span className="text-sm font-semibold">{formatSalary(job.salary.min, job.salary.max, job.salary.currency)}</span>
              </div>

              <p className="text-gray-700 text-sm line-clamp-4">
                {job.description}
              </p>
            </div>
          )}
          
          {currentInfoIndex === 1 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Requirements</h3>
              <ul className="space-y-2">
                {job.requirements.slice(0, 4).map((req, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {req}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {job.skills.slice(0, 4).map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {job.skills.length > 4 && (
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                    +{job.skills.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}
          
          {currentInfoIndex === 2 && (
            <div className="space-y-4">
              <div className="flex items-center mb-3">
                <Building2 className="w-5 h-5 mr-2 text-gray-600" />
                <h3 className="font-semibold text-gray-800">About Company</h3>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{job.company.size}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Industry:</span> {job.company.industry}
                </div>
              </div>
              
              <p className="text-gray-700 text-sm line-clamp-3">
                {job.company.description}
              </p>
              
              <h4 className="font-semibold text-gray-800 mt-4">Benefits</h4>
              <div className="flex flex-wrap gap-2">
                {job.benefits.slice(0, 3).map((benefit, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {benefit}
                  </span>
                ))}
                {job.benefits.length > 3 && (
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                    +{job.benefits.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
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