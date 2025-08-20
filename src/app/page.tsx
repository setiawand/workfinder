'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';

export default function Home() {
  const { state } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (state.currentUser) {
      router.push('/discover');
    } else {
      router.push('/auth');
    }
  }, [state.currentUser, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
