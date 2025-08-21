'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Send, Heart, MessageCircle } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { mockJobs } from '@/utils/mockData';
import type { Application, Message, Job } from '@/types';

export default function ChatPage() {
  const { state, dispatch } = useAppContext();
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [messageText, setMessageText] = useState('');
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!state.currentUser) {
      router.push('/auth');
      return;
    }

    // Get applied jobs data
    const jobs = state.applications.map(application => {
      return mockJobs.find(job => job.id === application.jobId);
    }).filter(Boolean) as Job[];
    
    setAppliedJobs(jobs);
  }, [state.currentUser, state.applications, router]);

  useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedApplication || !state.currentUser) return;

    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      applicationId: selectedApplication.id,
      senderId: state.currentUser.id,
      content: messageText.trim(),
      timestamp: new Date(),
      read: false
    };

    dispatch({ type: 'ADD_MESSAGE', payload: newMessage });
    setMessageText('');

    // Simulate HR response after 2 seconds
    setTimeout(() => {
      const job = appliedJobs.find(j => j.id === selectedApplication.jobId);
      if (job) {
        const responseMessage: Message = {
          id: `msg_${Date.now()}_response`,
          applicationId: selectedApplication.id,
          senderId: 'hr_' + job.company.id,
          content: getRandomHRResponse(),
          timestamp: new Date(),
          read: false
        };
        dispatch({ type: 'ADD_MESSAGE', payload: responseMessage });
      }
    }, 2000);
  };

  const getRandomHRResponse = () => {
    const responses = [
      "Thank you for your interest! We'll review your application.",
      "Great background! Can you tell us more about your experience?",
      "We're impressed with your profile! When are you available for an interview?",
      "Thanks for applying! We'll be in touch soon.",
      "Your skills look like a great fit for this role!",
      "We'd love to learn more about your experience with this technology.",
      "Thank you for your application. We'll contact you within 2-3 business days."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const getApplicationMessages = (applicationId: string) => {
    return state.messages.filter(msg => msg.applicationId === applicationId);
  };

  const getLastMessage = (applicationId: string) => {
    const messages = getApplicationMessages(applicationId);
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

        {/* Applications List */}
        <div className="flex-1 overflow-y-auto">
          {state.applications.length === 0 ? (
            <div className="p-6 text-center">
              <Heart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No applications yet</p>
              <p className="text-sm text-gray-400 mt-1">Start applying to jobs!</p>
            </div>
          ) : (
            state.applications.map((application, index) => {
              const job = appliedJobs[index];
              const lastMessage = getLastMessage(application.id);
              
              if (!job) return null;
              
              return (
                <div
                  key={application.id}
                  onClick={() => setSelectedApplication(application)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedApplication?.id === application.id ? 'bg-blue-50 border-blue-200' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">{job.company.name.charAt(0)}</span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{job.title}</h3>
                      <p className="text-sm text-gray-500 truncate">
                        {lastMessage ? lastMessage.content : 'Start the conversation! 💼'}
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
        {selectedApplication ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-white border-b border-gray-200">
              <div className="flex items-center space-x-3">
                {(() => {
                  const jobIndex = state.applications.findIndex(a => a.id === selectedApplication.id);
                  const job = appliedJobs[jobIndex];
                  return job ? (
                    <>
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold">{job.company.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h2 className="font-semibold text-gray-900">{job.title}</h2>
                        <p className="text-sm text-green-500">{job.company.name} HR</p>
                      </div>
                    </>
                  ) : null;
                })()}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {getApplicationMessages(selectedApplication.id).map((message) => {
                const isOwn = message.senderId === state.currentUser?.id;
                return (
                  <div
                    key={message.id}
                    className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        isOwn
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                          : 'bg-gray-200 text-gray-900'
                      }`}
                    >
                      <p>{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          isOwn ? 'text-blue-100' : 'text-gray-500'
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
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                  className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Select an application to start chatting</h2>
              <p className="text-gray-500">Choose a job application to begin a conversation with HR</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}