'use client';

import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { AppState, Job, Application, Message, AuthUser, SwipeAction } from '../types';

type AppAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_CURRENT_USER'; payload: AuthUser | null }
  | { type: 'SET_JOBS'; payload: Job[] }
  | { type: 'ADD_APPLICATION'; payload: Application }
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SWIPE_JOB'; payload: SwipeAction };

const initialState: AppState = {
  currentUser: null,
  jobs: [],
  applications: [],
  messages: [],
  swipedJobs: [],
  loading: false,
  error: null,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payload };
    case 'SET_JOBS':
      return { ...state, jobs: action.payload };
    case 'ADD_APPLICATION':
      return { ...state, applications: [...state.applications, action.payload] };
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'SWIPE_JOB':
      return {
        ...state,
        swipedJobs: [...state.swipedJobs, action.payload.jobId]
      };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}