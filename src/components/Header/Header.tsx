import { AccountCircle, CloseSharp, Cloud, CropSquareSharp, Warning } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import image from "../../../public/Girl-Stock.jpeg";

const Header = () => {
  return (
    <div>
      <div className="flex items-center border-b pb-4 mb-4">
        <div className="flex items-center gap-5 flex-grow">
          <div className="bg-blue-600 rounded-full w-10 h-10 mr-4"></div>
          <div className="text-xl font-bold">Global SpaceX</div>
          <span className="bg-red-500 cursor-pointer text-white opacity-80 text-xs px-2 py-1 rounded">Churned</span>
          <span className="bg-slate-100 cursor-pointer text-balck text-xs px-2 py-1 rounded">New Customer <CloseSharp /></span>
          <span className="bg-slate-100 cursor-pointer text-balck text-xs px-2 py-1 rounded">Important <CloseSharp /></span>
          <span className="bg-gray-200 cursor-pointer text-xs px-2 py-1 rounded">+ Tag</span>
        </div>
        <div className="flex items-center space-x-2 ml-4">
        <div className="text-gray-700">Status : </div>
          <span className="bg-green-500 w-3 h-3 rounded-full"></span>
        <div className="text-gray-700">CLoud : </div>
          <Cloud className="text-gray-500"  />
          <div className="flex gap-2 items-center">
            <Avatar alt="Travis Howard" src={"https://images.ctfassets.net/hrltx12pl8hq/3AnnkVqrlhrqb9hjlMBzKX/693a8e5d40b4b6c55a7673ca4c807eef/Girl-Stock"} />
            <div>Arjun</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
