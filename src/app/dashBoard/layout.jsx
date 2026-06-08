import { SideBar } from '@/components/dashBoard/SideBar';
import React from 'react';


const DashBoard = ({children}) => {
    return (
        <div className='flex min-h-screen'>
        <SideBar></SideBar>
          <div className='flex-1'>
            {children}
          </div>
        </div>
    );
};

export default DashBoard;