import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from './headerComponent';
import Dropdown from './DropdownComponent';
import axios from 'axios';
import Banner from './Banner';

function DashboardPelatihan() {
  const location = useLocation();
  const recommendedCategory = location.state?.recommendedCategory || localStorage.getItem("recommendedCategory") || '';

  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(recommendedCategory);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setLoading(true);
    axios.get('https://substantial-starla-ardhilla-fa22d60a.koyeb.app/trainings')
      .then(response => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const filteredCourses = selectedCategory
    ? courses.filter(course => course.category === selectedCategory)
    : [];

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-grow py-5 ml-16 mr-4 sm:ml-16 sm:mr-8 lg:mx-16 lg:ml-72 lg:mr-24">
        <Header title="PELATIHAN" /><br />

        <Banner />

        <Dropdown
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
        />

        {/* Spinner ketika loading */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader border-t-4 border-b-4 border-gray-800 rounded-full w-12 h-12 animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Bagian Kursus Pelatihan tampil perlevel */}
            {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <div key={level}>
                <h2 className="text-2xl font-bold mt-10 mb-4">Level Kursus {level}</h2>
                <div className="bg-[#FFB1B1] bg-opacity-40 p-6 rounded-lg shadow-[0_10px_10px_rgba(0,0,0,0.35)]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                    {filteredCourses.length > 0 ? (
                      filteredCourses
                        .filter(course => course.level === level)
                        .map(course => (
                          <CourseCard
                            key={course.kelas_id}
                            imageUrl={course.image_url}
                            title={course.title}
                            type={course.type}
                            provider={course.provider}
                            registrationUrl={course.registration_url}
                          />
                        ))
                    ) : (
                      <p className="col-span-full text-center text-gray-600">Tidak ada Course ditemukan.</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

const CourseCard = ({ imageUrl, title, type, provider, registrationUrl }) => (
  <div className="bg-white p-4 shadow-md rounded-md w-full flex flex-col justify-between h-full">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-32 object-cover mb-2"
    />
    <div className="flex flex-col justify-between flex-grow">
    <h3 className="text-base font-semibold text-center mb-2 h-12 overflow-hidden line-clamp-2">{title}</h3>
      <div className="mb-3">
        <p className="text-sm text-gray-500">{type}</p> 
        <p className="text-sm text-gray-500">{provider}</p>
      </div>
      <div className="mt-auto">
        <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-[#921A40] text-white px-3 py-1 rounded">
            Lihat Lebih Lanjut
          </button>
        </a>
      </div>
    </div>
  </div>
);


export default DashboardPelatihan;