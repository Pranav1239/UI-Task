import React from 'react';
import { AccountCircle, CloseSharp, Cloud, CropSquareSharp, Warning } from '@mui/icons-material';
import Header from './Header/Header';
import MobileHeader from './Header/MobileHeader';

const UserProfileTab = () => {
  const data = [
    { label: 'Tickets Due', value: 6 },
    { label: 'Tickets', value: 6 },
    { label: 'High Priority', value: 1 },
    { label: 'Meetings', value: 1 },
    { label: 'ARR', value: '$100,000' },
    { label: 'Active Plays', value: 1 },
    { label: 'Renewal Date', value: '05/25/2024', warning: true },
    { label: 'Segment', value: 'Enterprise' },
    { label: 'Country', value: 'USA' },
    { label: 'Location', value: 'Dallas, TX' },
    { label: 'Time zone', value: 'CST' },
    { label: 'Account Access', value: 'Open 3 Days Left', status: true },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className='hidden xl:block'>
        <Header />
      </div>
      <div className=' xl:hidden'>
        <MobileHeader />
      </div>
      <div className="flex overflow-x-auto gap-8 space-x-4">
        {data.map(({ label, value, warning, status }, index) => (
          <div key={index} className="p-2 min-w-max">
            <div className="text-sm text-gray-500">{label}</div>
            <div className="text-sm font-bold flex items-center">
              {warning && <Warning className="text-yellow-500 mr-1" />}
              {status && <p className="bg-green-500 w-3 h-3 rounded-full mr-2"></p>}
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfileTab;
