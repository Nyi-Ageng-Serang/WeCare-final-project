import React, { useState } from 'react';

function JobCard({ job }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200 hover:border-[#921A40] transform hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-xl font-semibold text-[#921A40] flex items-center gap-2">
        <i className="fas fa-briefcase"></i> {job.title}
      </h3>
      <p className="text-gray-700 font-medium">{job.company}</p>
      <div className="mt-2 text-sm text-gray-500">
        <p>{job.salary}</p>
        <p>{job.type} | {job.location}</p>
      </div>

      {isExpanded && (
        <>
          <div className="mt-4">
            <h4 className="font-medium text-gray-800">Responsibilities:</h4>
            <p className="text-gray-600 text-sm">{job.responsibilities}</p>
          </div>
          <div className="mt-4">
            <h4 className="font-medium text-gray-800">Requirements:</h4>
            <p className="text-gray-600 text-sm">{job.requirements}</p>
          </div>
        </>
      )}

      <div className="mt-6">
        <button
          onClick={toggleDetails}
          className="text-[#921A40] text-sm font-semibold hover:text-[#B74A5A] transition-all duration-200"
        >
          {isExpanded ? 'Tutup' : 'Selengkapnya'}
        </button>
      </div>

      <div className="mt-6">
        <a
          href={`mailto:${job.apply}`}
          className="inline-block px-6 py-2 text-white bg-[#921A40] rounded-full hover:bg-[#B74A5A] transition-all duration-200"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}

export default JobCard;
