// src/context/DiscussionProvider.js
import React, { createContext, useState, useEffect } from "react";

export const ForumContext = createContext();

const ForumProvider = ({ children }) => {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    const Discussions = [
        {
            id: "1",
            category: "Freelance",
            user: "Jessica Casper",
            text: "Saya ingin berbagi pengalaman saya sebagai seseorang yang sudah bekerja sebagai freelancer selama tiga tahun.",
            details:
              "Mari kita bahas tentang teknologi terbaru yang muncul di tahun ini.",
            time: "11:02 PM 12 Desember 2023",
          },
          {
            id: "2",
            category: "Tips & Trik",
            user: "Emma Kazari",
            text: "Bagaimana cara mengatur waktu...",
            details:
              "Mari kita bahas tentang teknologi terbaru yang muncul di tahun ini.",
            time: "10:42 PM 12 Desember 2023",
          },
          {
            id: "3",
            category: "Life Style",
            user: "Devin Pane",
            text: "Menjaga gaya hidup saat sibuk bekerja...",
            details:
              "Mari kita bahas tentang teknologi terbaru yang muncul di tahun ini.",
            time: "10:15 PM 12 Desember 2023",
          },
          {
            id: "4",
            category: "STEM",
            user: "Esther Howard",
            text: "Pentingnya pendidikan STEM...",
            details:
              "Mari kita bahas tentang teknologi terbaru yang muncul di tahun ini.",
            time: "10:01 PM 12 Desember 2023",
          },
    ];

    setDiscussions(Discussions);
  }, []);

  return (
    <ForumContext.Provider value={{ discussions }}>
      {children}
    </ForumContext.Provider>
  );
};

export default ForumProvider;
