import { getCompanyJobs } from '@/lib/api/jobs';
import React from 'react';

const RecruiterJobsPage =async () => {
    const companyId= "company_123"
    const jobs = await getCompanyJobs(companyId)

    console.log("Jobs",jobs)

    return (
        <div>
            <h1>Recruiter page</h1>
        </div>
    );
};

export default RecruiterJobsPage;