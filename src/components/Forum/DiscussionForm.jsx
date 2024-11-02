import React, { useContext, useState } from "react";
import { ForumContext } from "../../context/ForumProvider";

const DiscussionForm = ({ onClose }) => {
  const { addDiscussion } = useContext(ForumContext);
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDiscussion(topic, title, details);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 tracking-wide">
      <form
        className="bg-white p-6 rounded shadow-lg lg:w-2/5 w-full mx-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl text-center font-semibold mb-4">
          Posting Diskusi Baru
        </h2>
        <div className="mb-4">
          <label className="block mb-1">Pilih Topik Diskusi</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full focus:outline-none"
            required
          >
            <option value="">Pilih topik</option>
            <option value="Freelance">Freelance</option>
            <option value="Tips & Trik">Tips & Trik</option>
            <option value="Life Style">Life Style</option>
            <option value="STEM">STEM</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Judul Diskusi</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full focus:outline-none"
            placeholder="Masukan judul diskusi"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Detail Diskusi</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full h-48 focus:outline-none"
            placeholder="Masukan detail diskusi yang ingin anda mulai"
            required
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="font-semibold border-2 border-red text-red py-1 px-8 rounded-md hover:bg-softPink hover:border-softPink hover:text-red mr-3"
            onClick={onClose}
          >
            Batal
          </button>
          <button
            type="submit"
            className="font-semibold border-2 border-red bg-red text-white py-1 px-8 rounded-md hover:bg-softPink hover:border-softPink hover:text-red"
          >
            Posting
          </button>
        </div>
      </form>
    </div>
  );
};

export default DiscussionForm;
