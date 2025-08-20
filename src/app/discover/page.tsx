'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Heart, X, MessageCircle, Settings } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { mockUsers } from '@/utils/mockData';
import SwipeCard from '@/components/SwipeCard';
import type { User, Match, SwipeAction } from '@/types';

export default function DiscoverPage() {
  const { state, dispatch } = useAppContext();
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [matchedUser, setMatchedUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!state.currentUser) {
      router.push('/auth');
      return;
    }
    
    if (state.users.length === 0) {
      dispatch({ type: 'SET_USERS', payload: mockUsers });
    }
  }, [state.currentUser, state.users.length, dispatch, router]);

  const handleSwipe = (direction: 'left' | 'right') => {
    const user = currentUser;
    if (!user) return;

    const swipeAction: SwipeAction = {
      userId: state.currentUser?.id || '',
      targetUserId: user.id,
      action: direction === 'right' ? 'like' : 'pass',
      timestamp: new Date()
    };

    dispatch({
      type: 'SWIPE_USER',
      payload: swipeAction
    });

    // Simulate match (30% chance on right swipe)
    if (direction === 'right' && Math.random() < 0.3) {
      const newMatch: Match = {
        id: `match_${Date.now()}`,
        users: [state.currentUser?.id || '', user.id],
        matchedAt: new Date()
      };
      
      dispatch({ type: 'ADD_MATCH', payload: newMatch });
      setMatchedUser(user);
      setShowMatchModal(true);
    }

    setCurrentUserIndex(prev => prev + 1);
  };

  const currentUser = state.users[currentUserIndex];

  if (!state.currentUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white shadow-sm">
        <button
          onClick={() => router.push('/profile')}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Settings className="w-6 h-6 text-gray-600" />
        </button>
        
        <div className="flex items-center space-x-2">
          <Heart className="w-8 h-8 text-pink-500" />
          <h1 className="text-xl font-bold text-gray-900">DatingFinder</h1>
        </div>
        
        <button
          onClick={() => router.push('/chat')}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
        >
          <MessageCircle className="w-6 h-6 text-gray-600" />
          {state.matches.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {state.matches.length}
            </span>
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        {currentUser ? (
          <SwipeCard
            user={currentUser}
            onSwipe={handleSwipe}
          />
        ) : (
          <div className="text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">No more profiles!</h2>
            <p className="text-gray-500">Check back later for new matches</p>
          </div>
        )}
      </div>

      {/* Match Modal */}
      {showMatchModal && matchedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">It's a Match!</h2>
              <p className="text-gray-600">You and {matchedUser.name} liked each other</p>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setShowMatchModal(false)}
                className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Keep Swiping
              </button>
              <button
                onClick={() => {
                  setShowMatchModal(false);
                  router.push('/chat');
                }}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}