'use client';

import { useAppContext } from '@/context/AppContext';
import { getCurrentUser } from '@/utils/mockData';

export default function ProfilePage() {
  const { state } = useAppContext();
  const currentUser = getCurrentUser();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                {currentUser.name.charAt(0)}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {currentUser.name}
            </h1>
            <p className="text-gray-600 mb-1">{currentUser.email}</p>
            <p className="text-gray-500 text-sm">Jakarta, Indonesia</p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Statistik</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {state.applications.length}
              </div>
              <div className="text-sm text-gray-600">Aplikasi Terkirim</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">0</div>
              <div className="text-sm text-gray-600">Interview</div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Keahlian</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pengalaman</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-900">Senior Software Engineer</h3>
              <p className="text-gray-600 text-sm">Tech Solutions Inc.</p>
              <p className="text-gray-500 text-xs">2022 - Sekarang</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-medium text-gray-900">Software Engineer</h3>
              <p className="text-gray-600 text-sm">StartupXYZ</p>
              <p className="text-gray-500 text-xs">2020 - 2022</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-20">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pendidikan</h2>
          <div className="border-l-4 border-indigo-500 pl-4">
            <h3 className="font-medium text-gray-900">S1 Teknik Informatika</h3>
            <p className="text-gray-600 text-sm">Universitas Indonesia</p>
            <p className="text-gray-500 text-xs">2016 - 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}