'use client'
import { useSession } from '@/lib/auth-client';
import React from 'react';

import StatsGrid from './StatsGrid';
import { IoDocumentTextOutline, IoPeopleOutline, IoFlashOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

const myData = [
  { label: "Total Job Posts", value: "48", icon: IoDocumentTextOutline },
  { label: "Total Applicants", value: "1,284", icon: IoPeopleOutline },
  { label: "Active Jobs", value: "18", icon: IoFlashOutline },
  { label: "Jobs Closed", value: "32", icon: IoCheckmarkCircleOutline },
]

const RecruiterPage = () => {

    const {data : session ,isPanding}=useSession()
    if(isPanding){
        <span>Loading....</span>
    }

     const user = session?.user;

    return (
        <div>
            <h2 className='font-bold text-3xl ml-2'>Welcome Back {user?.name}</h2>

            <StatsGrid data={myData} />

        </div>
    );
};

export default RecruiterPage;