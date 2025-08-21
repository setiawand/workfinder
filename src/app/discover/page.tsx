'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Briefcase, MessageCircle, Settings } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { mockJobs } from '@/utils/mockData';
import SwipeCard from '@/components/SwipeCard';
import type { Job, Application, SwipeAction } from '@/types';

export default function DiscoverPage() {
  const { state, dispatch } = useAppContext();
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [appliedJob, setAppliedJob] = useState<Job | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!state.currentUser) {
      router.push('/auth');
      return;
    }
    
    if (state.jobs.length === 0) {
      dispatch({ type: 'SET_JOBS', payload: mockJobs });
    }
  }, [state.currentUser, state.jobs.length, dispatch, router]);

  const handleSwipe = (direction: 'left' | 'right') => {
    const job = currentJob;
    if (!job) return;

    const swipeAction: SwipeAction = {
      userId: state.currentUser?.id || '',
      jobId: job.id,
      action: direction === 'right' ? 'interested' : 'not-interested',
      timestamp: new Date()
    };

    dispatch({
      type: 'SWIPE_JOB',
      payload: swipeAction
    });

    // Auto-apply when interested (right swipe)
    if (direction === 'right') {
      const newApplication: Application = {
        id: `app_${Date.now()}`,
        jobId: job.id,
        userId: state.currentUser?.id || '',
        appliedAt: new Date(),
        status: 'pending'
      };
      
      dispatch({ type: 'ADD_APPLICATION', payload: newApplication });
      setAppliedJob(job);
      setShowApplicationModal(true);
    }

    setCurrentJobIndex(prev => prev + 1);
  };

  // Filter out jobs that have already been swiped
  const availableJobs = state.jobs.filter(job => !state.swipedJobs.includes(job.id));
  const currentJob = availableJobs[currentJobIndex];

  if (!state.currentUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white shadow-sm">
        <button
          onClick={() => router.push('/profile')}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Settings className="w-6 h-6 text-gray-600" />
        </button>
        
        <div className="flex items-center space-x-2">
          <Briefcase className="w-8 h-8 text-blue-500" />
          <h1 className="text-xl font-bold text-gray-900">WorkFinder</h1>
        </div>
        
        <button
          onClick={() => router.push('/chat')}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
        >
          <MessageCircle className="w-6 h-6 text-gray-600" />
          {state.applications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {state.applications.length}
            </span>
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        {currentJob ? (
          <SwipeCard
            job={currentJob}
            onSwipe={handleSwipe}
            isTop={true}
          />
        ) : (
          <div className="text-center">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">No more jobs!</h2>
            <p className="text-gray-500">Check back later for new opportunities</p>
          </div>
        )}
      </div>

      {/* Application Modal */}
      {showApplicationModal && appliedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Sent!</h2>
              <p className="text-gray-600">Your application for {appliedJob.title} at {appliedJob.company.name} has been submitted</p>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setShowApplicationModal(false)}
                className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Keep Looking
              </button>
              <button
                onClick={() => {
                  setShowApplicationModal(false);
                  router.push('/applications');
                }}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition-all"
              >
                View Applications
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}