import Diskusi from "./Diskusi";
import Hero from "./HeroSection";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import DiscussionForm from "./DiscussionForm";

function Forum() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <Hero />
      <div className="flex gap-20 px-10 my-10">
        <Sidebar onOpen={() => setIsFormOpen(true)} />
        <Diskusi />
      </div>
      {isFormOpen && <DiscussionForm onClose={() => setIsFormOpen(false)} />}
    </>
  );
}

export default Forum;
