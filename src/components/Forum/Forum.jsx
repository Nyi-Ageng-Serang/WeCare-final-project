import React, { useState, useContext } from "react";
import { ForumContext } from "../../context/ForumProvider";
import Hero from "./HeroSection";
import Sidebar from "./Sidebar";
import Discussion from "./Discussion";
import DiscussionForm from "./DiscussionForm";

function Forum() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { discussions } = useContext(ForumContext);
  const [selectTopic, setSelectTopic] = useState("");

  const filterDiscussions = selectTopic
    ? discussions.filter((discussion) => discussion.category === selectTopic)
    : discussions;

  const handleSelectTopic = (topic) => {
    setSelectTopic(topic);
  };

  return (
    <>
      <Hero />
      <div className="flex flex-col gap-0 lg:flex-row lg:gap-20 xl:mx-16 mx-10 my-10">
        <Sidebar
          onOpen={() => setIsFormOpen(true)}
          onSelectTopic={handleSelectTopic}
        />
        {isFormOpen && <DiscussionForm onClose={() => setIsFormOpen(false)} />}
        <Discussion discussions={filterDiscussions} />
      </div>
    </>
  );
}

export default Forum;
