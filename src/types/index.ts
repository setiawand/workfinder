export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  industry: string;
  size: string;
  location: string;
  website?: string;
  verified: boolean;
}

export interface Job {
  id: string;
  title: string;
  company: Company;
  description: string;
  requirements: string[];
  benefits: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  level: 'entry' | 'mid' | 'senior' | 'executive';
  remote: boolean;
  postedAt: Date;
  expiresAt: Date;
  skills: string[];
}

export interface Application {
  id: string;
  jobId: string;
  userId: string;
  appliedAt: Date;
  status: 'pending' | 'reviewed' | 'interview' | 'rejected' | 'accepted';
  coverLetter?: string;
}

export interface Message {
  id: string;
  applicationId: string;
  senderId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface SwipeAction {
  userId: string;
  jobId: string;
  action: 'interested' | 'not-interested';
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
  jobs: Job[];
  applications: Application[];
  messages: Message[];
  swipedJobs: string[]; // IDs of jobs that have been swiped
  loading: boolean;
  error: string | null;
}