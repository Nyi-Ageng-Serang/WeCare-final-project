import React, { useEffect, useState } from 'react';
import Header from './headerComponent';
import JobCard from './JobCard';
import jobData from './JobData';

function DashboardLowongan() {
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const recommendedCategory = localStorage.getItem("recommendedCategory");
    
    if (recommendedCategory) {
      const filtered = jobData.filter(job => job.category === recommendedCategory);
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobData);
    }
  }, []);

  return (
    <div className="flex">
      <div className="flex-grow py-5 ml-72 mr-10">
        <Header title="LOWONGAN" />
        <hr className="border-0 h-px bg-[#921A40]" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardLowongan;
