import JobsTable from '@/components/dashBoard/JobsTable';
import { getCompanyJobs } from '@/lib/api/jobs';
// import JobsTable from './JobsTable'; // or correct path

const RecruiterJobsPage = async () => {
  const companyId = "comp_123";
  const jobs = await getCompanyJobs(companyId);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">All Job Posts</h1>
      <JobsTable jobs={jobs} />
    </div>
  );
};

export default RecruiterJobsPage;