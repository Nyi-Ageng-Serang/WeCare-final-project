import React, { useState } from "react";

const DiscussionForm = ({ onClose }) => {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ topic, title, details });
    onClose(); // Close form after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 tracking-wide">
      <form
        className="bg-white p-6 rounded shadow-lg w-2/5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl text-center font-semibold mb-4">Posting Diskusi Baru</h2>
        <div className="mb-4">
          <label className="block mb-1">Pilih Topik Diskusi</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
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
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Masukan judul diskusi"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Detail Diskusi</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full h-48"
            placeholder="Masukan  detail diskusi yang ingin anda mulai"
            required
          ></textarea>
        </div>
        <div className="flex justify-between">
        <button
          type="submit"
          className="bg-red text-white rounded py-2 px-4 mr-2"
        >
          Posting
        </button>
        <button
          type="button"
          className="bg-gray-300 text-black rounded py-2 px-4"
          onClick={onClose}
        >
          Batal
        </button>
        </div>
        
      </form>
    </div>
  );
};

export default DiscussionForm;
