'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Send, Heart, MessageCircle } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { mockUsers } from '@/utils/mockData';
import type { Match, Message, User } from '@/types';

export default function ChatPage() {
  const { state, dispatch } = useAppContext();
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [messageText, setMessageText] = useState('');
  const [matchedUsers, setMatchedUsers] = useState<User[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!state.currentUser) {
      router.push('/auth');
      return;
    }

    // Get matched users data
    const users = state.matches.map(match => {
      const otherUserId = match.users.find(id => id !== state.currentUser?.id);
      return mockUsers.find(user => user.id === otherUserId);
    }).filter(Boolean) as User[];
    
    setMatchedUsers(users);
  }, [state.currentUser, state.matches, router]);

  useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedMatch || !state.currentUser) return;

    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      matchId: selectedMatch.id,
      senderId: state.currentUser.id,
      content: messageText.trim(),
      timestamp: new Date(),
      read: false
    };

    dispatch({ type: 'ADD_MESSAGE', payload: newMessage });
    setMessageText('');

    // Simulate response after 2 seconds
    setTimeout(() => {
      const otherUserId = selectedMatch.users.find(id => id !== state.currentUser?.id);
      if (otherUserId) {
        const responseMessage: Message = {
          id: `msg_${Date.now()}_response`,
          matchId: selectedMatch.id,
          senderId: otherUserId,
          content: getRandomResponse(),
          timestamp: new Date(),
          read: false
        };
        dispatch({ type: 'ADD_MESSAGE', payload: responseMessage });
      }
    }, 2000);
  };

  const getRandomResponse = () => {
    const responses = [
      "That's interesting! Tell me more 😊",
      "I totally agree with you!",
      "Haha, that's funny! 😄",
      "What do you think about...?",
      "I'd love to hear your thoughts on that",
      "That sounds amazing!",
      "I've been thinking the same thing"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const getMatchMessages = (matchId: string) => {
    return state.messages.filter(msg => msg.matchId === matchId);
  };

  const getLastMessage = (matchId: string) => {
    const messages = getMatchMessages(matchId);
    return messages[messages.length - 1];
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  if (!state.currentUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Matches Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/discover')}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-6 h-6 text-pink-500" />
              <h1 className="text-lg font-semibold text-gray-900">Messages</h1>
            </div>
            <div className="w-9" /> {/* Spacer */}
          </div>
        </div>

        {/* Matches List */}
        <div className="flex-1 overflow-y-auto">
          {state.matches.length === 0 ? (
            <div className="p-6 text-center">
              <Heart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No matches yet</p>
              <p className="text-sm text-gray-400 mt-1">Start swiping to find matches!</p>
            </div>
          ) : (
            state.matches.map((match, index) => {
              const user = matchedUsers[index];
              const lastMessage = getLastMessage(match.id);
              
              if (!user) return null;
              
              return (
                <div
                  key={match.id}
                  onClick={() => setSelectedMatch(match)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedMatch?.id === match.id ? 'bg-pink-50 border-pink-200' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={user.photos[0]}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{user.name}</h3>
                      <p className="text-sm text-gray-500 truncate">
                        {lastMessage ? lastMessage.content : 'Say hello! 👋'}
                      </p>
                    </div>
                    {lastMessage && (
                      <span className="text-xs text-gray-400">
                        {formatTime(lastMessage.timestamp)}
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedMatch ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-white border-b border-gray-200">
              <div className="flex items-center space-x-3">
                {(() => {
                  const userIndex = state.matches.findIndex(m => m.id === selectedMatch.id);
                  const user = matchedUsers[userIndex];
                  return user ? (
                    <>
                      <img
                        src={user.photos[0]}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h2 className="font-semibold text-gray-900">{user.name}</h2>
                        <p className="text-sm text-green-500">Online</p>
                      </div>
                    </>
                  ) : null;
                })()}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {getMatchMessages(selectedMatch.id).map((message) => {
                const isOwn = message.senderId === state.currentUser?.id;
                return (
                  <div
                    key={message.id}
                    className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        isOwn
                          ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                          : 'bg-gray-200 text-gray-900'
                      }`}
                    >
                      <p>{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          isOwn ? 'text-pink-100' : 'text-gray-500'
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                  className="p-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:from-pink-600 hover:to-rose-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Select a match to start chatting</h2>
              <p className="text-gray-500">Choose someone from your matches to begin a conversation</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}