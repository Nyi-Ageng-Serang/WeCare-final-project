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
        text: "Lorem ipsum dolor sit amet consectetur",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, placeat saepe obcaecati doloribus quo sapiente sed dicta labore temporibus accusamus ipsum molestiae ullam dolores adipisci deleniti, recusandae, at libero.",
        time: "11:02 PM 12 Desember 2023",
        comments: [],
      },
      {
        id: "2",
        category: "Tips & Trik",
        user: "Emma Kazari",
        text: "Lorem ipsum dolor sit amet consectetur",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, placeat saepe obcaecati doloribus quo sapiente sed dicta labore temporibus accusamus ipsum molestiae ullam dolores adipisci deleniti, recusandae, at libero.",
        time: "10:42 PM 12 Desember 2023",
        comments: [],
      },
      {
        id: "3",
        category: "Life Style",
        user: "Devin Pane",
        text: "Lorem ipsum dolor sit amet consectetur",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, placeat saepe obcaecati doloribus quo sapiente sed dicta labore temporibus accusamus ipsum molestiae ullam dolores adipisci deleniti, recusandae, at libero.",
        time: "10:15 PM 12 Desember 2023",
        comments: [],
      },
      {
        id: "4",
        category: "STEM",
        user: "Esther Howard",
        text: "Lorem ipsum dolor sit amet consectetur",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, placeat saepe obcaecati doloribus quo sapiente sed dicta labore temporibus accusamus ipsum molestiae ullam dolores adipisci deleniti, recusandae, at libero.",
        time: "10:01 PM 12 Desember 2023",
        comments: [],
      },
    ];

    setDiscussions(Discussions);
  }, []);

  const addComment = (discussionId, commentText) => {
    setDiscussions((prevDiscussions) =>
      prevDiscussions.map((discussion) =>
        discussion.id === discussionId
          ? {
              ...discussion,
              comments: [
                ...discussion.comments,
                { user: "Siapa aja", text: commentText },
              ],
            }
          : discussion
      )
    );
  };

  return (
    <ForumContext.Provider value={{ discussions, addComment }}>
      {children}
    </ForumContext.Provider>
  );
};

export default ForumProvider;
