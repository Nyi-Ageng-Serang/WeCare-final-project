import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from './headerComponent';
import Dropdown from './DropdownComponent';
import axios from 'axios';

function DashboardPelatihan() {
  const location = useLocation();
  const recommendedCategory = location.state?.recommendedCategory || '';

  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(recommendedCategory); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    axios.get('https://671f9010e7a5792f052eb5f4.mockapi.io/Pelatihan/pelatihan')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Memfilter kursus berdasarkan kategori yang dipilih
  const filteredCourses = selectedCategory
    ? courses.filter(course => course.category === selectedCategory)
    : []; // Jika tidak ada kategori yang dipilih, set filter menjadi array kosong

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-grow py-5 ml-16 mr-4 sm:ml-16 sm:mr-8 lg:mx-16 lg:ml-72 lg:mr-24">
        <Header title="PELATIHAN" />
        
        <Dropdown
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
        />

        {/* Bagian Kursus Gratis */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Materi Gratis</h2>
        <div className="bg-[#FFB1B1] bg-opacity-40 p-6 rounded-lg shadow-[0_10px_10px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {filteredCourses.length > 0 ? (
              filteredCourses
                .filter(course => course.level === "Gratis")
                .map(course => (
                  <CourseCard
                    key={course.kelas_id}
                    imageUrl={course.image_url}
                    title={course.category}
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

        {/* Bagian Kursus Lainnya */}
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
                        title={course.category}
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
      </div>
    </div>
  );
}

const CourseCard = ({ imageUrl, title, type, provider, registrationUrl }) => (
  <div className="bg-white p-4 shadow-md rounded-md w-full">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-32 object-cover mb-2"
    />
    <div className="flex flex-col space-y-3">
      <h3 className="text-base font-semibold text-center">{title}</h3>
      <div>
        <p className="text-sm text-gray-500">{type}</p> 
        <p className="text-sm text-gray-500">{provider}</p>
      </div>
      <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
        <button className="w-full bg-[#921A40] text-white px-3 py-1 rounded">
          Lihat Lebih Lanjut
        </button>
      </a>
    </div>
  </div>
);

export default DashboardPelatihan;
