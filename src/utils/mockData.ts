import type { User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 25,
    bio: 'Love hiking, coffee, and good conversations. Looking for someone who shares my passion for adventure!',
    photos: [
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop'
    ],
    location: 'Jakarta, Indonesia',
    interests: ['Hiking', 'Photography', 'Coffee', 'Travel', 'Reading'],
    gender: 'female',
    lookingFor: 'male',
    verified: true,
    lastActive: new Date('2024-01-15T10:30:00Z')
  },
  {
    id: '2',
    name: 'Michael Chen',
    age: 28,
    bio: 'Software engineer by day, chef by night. Love trying new restaurants and cooking for friends.',
    photos: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop'
    ],
    location: 'Bandung, Indonesia',
    interests: ['Cooking', 'Technology', 'Gaming', 'Music', 'Food'],
    gender: 'male',
    lookingFor: 'female',
    verified: true,
    lastActive: new Date('2024-01-15T14:20:00Z')
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    age: 23,
    bio: 'Artist and yoga instructor. Seeking someone who appreciates creativity and mindfulness.',
    photos: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop'
    ],
    location: 'Yogyakarta, Indonesia',
    interests: ['Art', 'Yoga', 'Meditation', 'Nature', 'Music'],
    gender: 'female',
    lookingFor: 'all',
    verified: false,
    lastActive: new Date('2024-01-15T09:15:00Z')
  },
  {
    id: '4',
    name: 'David Kim',
    age: 30,
    bio: 'Entrepreneur and fitness enthusiast. Love building things and staying active.',
    photos: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop'
    ],
    location: 'Surabaya, Indonesia',
    interests: ['Fitness', 'Business', 'Travel', 'Sports', 'Technology'],
    gender: 'male',
    lookingFor: 'female',
    verified: true,
    lastActive: new Date('2024-01-15T16:45:00Z')
  },
  {
    id: '5',
    name: 'Lisa Wang',
    age: 26,
    bio: 'Marketing professional who loves books, wine, and weekend getaways.',
    photos: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop'
    ],
    location: 'Jakarta, Indonesia',
    interests: ['Reading', 'Wine', 'Travel', 'Marketing', 'Movies'],
    gender: 'female',
    lookingFor: 'male',
    verified: true,
    lastActive: new Date('2024-01-15T12:00:00Z')
  }
];

export const getCurrentUser = () => ({
  id: 'current-user',
  email: 'user@example.com',
  name: 'Current User',
  isAuthenticated: true
});