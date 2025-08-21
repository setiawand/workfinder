'use client';

import { useAppContext } from '@/context/AppContext';
import { mockJobs } from '@/utils/mockData';
import { Job } from '@/types';
import { Briefcase, MapPin, DollarSign, Clock, Building } from 'lucide-react';
import Link from 'next/link';

export default function ApplicationsPage() {
  const { state } = useAppContext();
  const appliedJobs = state.applications.map(app => {
    const job = mockJobs.find(j => j.id === app.jobId);
    return job ? { ...job, applicationDate: app.appliedAt } : null;
  }).filter(Boolean) as (Job & { applicationDate: Date })[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Applications</h1>
          <p className="text-gray-600">Track your job applications and their status</p>
        </div>

        {/* Applications List */}
        {appliedJobs.length > 0 ? (
          <div className="space-y-4">
            {appliedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">
                          {job.company.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <div className="flex items-center text-gray-600">
                          <Building className="w-4 h-4 mr-1" />
                          <span>{job.company.name}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span>{job.salary.currency}{job.salary.min.toLocaleString()} - {job.salary.currency}{job.salary.max.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span>{job.type}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Applied on {job.applicationDate.toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                          Under Review
                        </span>
                        <Link
                          href={`/chat`}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                        >
                          Message HR
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No Applications Yet</h2>
            <p className="text-gray-500 mb-6">Start applying to jobs to see them here</p>
            <Link
              href="/discover"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all font-medium"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Find Jobs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}