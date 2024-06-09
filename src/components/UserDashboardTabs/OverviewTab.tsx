"use client"
import React from 'react';
import styles from '../../styles/styles.module.css';

const OverviewTab = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h1 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h1>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full mr-2">1</div>
              <span>Todays meetings</span>
            </div>
            <div className="flex items-center">
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">3</div>
              <span>Tasks due</span>
            </div>
            <div className="flex items-center">
              <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full mr-2">5</div>
              <span>Tickets due</span>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full mr-2">3</div>
              <span>Active Plays</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h1 className="text-lg font-semibold text-gray-700 mb-4">CTAs</h1>
          <div className="flex justify-center">
            <div className="pie relative w-24 h-24 sm:w-40 sm:h-40">
              <div className={`${styles.slice} ${styles.completed}`}></div>
              <div className={`${styles.slice} ${styles.inProgress}`}></div>
              <div className={`${styles.slice} ${styles.overdue}`}></div>
              <div className={`${styles.slice} ${styles.notStarted}`}></div>
            </div>
          </div>
          <div className="flex justify-around mt-4">
            <div className="text-center">
              <div className="w-3 h-3 rounded-full bg-green-500 inline-block mr-1"></div>
              <span className="text-sm text-gray-600">Completed</span>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 inline-block mr-1"></div>
              <span className="text-sm text-gray-600">In Progress</span>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 rounded-full bg-red-500 inline-block mr-1"></div>
              <span className="text-sm text-gray-600">Overdue</span>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 rounded-full bg-gray-400 inline-block mr-1"></div>
              <span className="text-sm text-gray-600">Not started</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h1 className="text-lg font-semibold text-gray-700 mb-4">Renewal Date</h1>
          <div className="flex items-center">
            <span className="text-2xl sm:text-3xl font-bold mr-2">15 Nov</span>
            <div className="bg-yellow-500 rounded h-2 flex-1">
              <div className="bg-yellow-600 h-2 rounded" style={{ width: '80%' }}></div>
            </div>
          </div>
          <span className="text-sm text-gray-600 mt-2">Your Annual License expire in 55 day(s)</span>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h1 className="text-lg font-semibold text-gray-700 mb-4">Total Users</h1>
          <div className="flex items-center">
            <span className="text-2xl sm:text-3xl font-bold mr-2">125k</span>
            <span className="text-gray-600">+ 2k</span>
          </div>
          <span className="text-sm text-gray-600 mt-2">Total Users added is the last 90 days (compared to previous period)</span>
        </div>
      </div>
    </div>
  );
}

export default OverviewTab;
