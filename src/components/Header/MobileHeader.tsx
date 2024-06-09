import React from 'react';
import { Cloud, CloseSharp } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import image from '../../../public/Girl-Stock.jpeg';

const MobileHeader = () => {
  return (
    <div className="border-b pb-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 rounded-full w-8 h-8"></div>
          <div className="text-lg font-bold">Global SpaceX</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-green-500 w-2 h-2 rounded-full"></div>
          <Cloud className="text-gray-500" />
          <Avatar alt="Travis Howard" src={"https://images.ctfassets.net/hrltx12pl8hq/3AnnkVqrlhrqb9hjlMBzKX/693a8e5d40b4b6c55a7673ca4c807eef/Girl-Stock"} />
        </div>
      </div>
      <div className="flex flex-wrap mt-2 gap-2">
        <span className="bg-red-500 cursor-pointer text-white opacity-80 text-xs px-2 py-1 rounded">Churned</span>
        <span className="bg-slate-100 cursor-pointer text-black text-xs px-2 py-1 rounded">New Customer <CloseSharp /></span>
        <span className="bg-slate-100 cursor-pointer text-black text-xs px-2 py-1 rounded">Important <CloseSharp /></span>
        <span className="bg-gray-200 cursor-pointer text-xs px-2 py-1 rounded">+ Tag</span>
      </div>
    </div>
  );
};

export default MobileHeader;
