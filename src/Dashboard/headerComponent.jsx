import React from 'react';

function Header({ title }) {
  return (
    <>
      <h1 className="text-[18pt] sm:text-[20pt] md:text-[22pt] lg:text-[24pt] font-bold font-sans text-[#921A40]">
        {title}
      </h1>
      <hr className="border-0 h-px bg-[#921A40] mt-6" />
    </>
  );
}

export default Header;