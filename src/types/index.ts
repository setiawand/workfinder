export interface User {
  id: string;
  name: string;
  age: number;
  bio: string;
  photos: string[];
  location: string;
  interests: string[];
  gender: 'male' | 'female' | 'other';
  lookingFor: 'male' | 'female' | 'other' | 'all';
  verified: boolean;
  lastActive: Date;
}

export interface Match {
  id: string;
  users: [string, string]; // user IDs
  matchedAt: Date;
  lastMessage?: Message;
}

export interface Message {
  id: string;
  matchId: string;
  senderId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface SwipeAction {
  userId: string;
  targetUserId: string;
  action: 'like' | 'pass';
  timestamp: Date;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  isAuthenticated: boolean;
}

export interface AppState {
  currentUser: AuthUser | null;
  users: User[];
  matches: Match[];
  messages: Message[];
  loading: boolean;
  error: string | null;
}