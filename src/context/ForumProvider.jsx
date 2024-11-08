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
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, placeat saepe obcaecati doloribus quo sapiente sed dicta labore temporibus accusamus ipsum molestiae ullam dolores adipisci deleniti, recusandae, at libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, placeat saepe obcaecati doloribus quo sapiente sed dicta labore temporibus accusamus ipsum molestiae ullam dolores adipisci deleniti, recusandae, at libero.",
        time: "02/11/2024, 17.25.39",
        comments: [],
      },
      {
        id: "2",
        category: "Tips & Trik",
        user: "Emma Kazari",
        text: "Lorem ipsum dolor sit amet consectetur",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, placeat saepe obcaecati doloribus quo sapiente sed dicta labore temporibus accusamus ipsum molestiae ullam dolores adipisci deleniti, recusandae, at libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, placeat saepe obcaecati doloribus quo sapiente sed dicta labore temporibus accusamus ipsum molestiae ullam dolores adipisci deleniti, recusandae, at libero.",
        time: "02/11/2024, 17.25.39",
        comments: [],
      },
      {
        id: "3",
        category: "Life Style",
        user: "Devin Pane",
        text: "Lorem ipsum dolor sit amet consectetur",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, placeat saepe obcaecati doloribus quo sapiente sed dicta labore temporibus accusamus ipsum molestiae ullam dolores adipisci deleniti, recusandae, at libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, placeat saepe obcaecati doloribus quo sapiente sed dicta labore temporibus accusamus ipsum molestiae ullam dolores adipisci deleniti, recusandae, at libero.",
        time: "02/11/2024, 17.25.39",
        comments: [],
      },
      {
        id: "4",
        category: "STEM",
        user: "Esther Howard",
        text: "Lorem ipsum dolor sit amet consectetur",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, placeat saepe obcaecati doloribus quo sapiente sed dicta labore temporibus accusamus ipsum molestiae ullam dolores adipisci deleniti, recusandae, at libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, placeat saepe obcaecati doloribus quo sapiente sed dicta labore temporibus accusamus ipsum molestiae ullam dolores adipisci deleniti, recusandae, at libero.",
        time: "02/11/2024, 17.25.39",
        comments: [],
      },
    ];

    setDiscussions(Discussions);
  }, []);

  const addDiscussion = (topic, title, details) => {
    const newDiscussion = {
      id: `${discussions.length + 1}`,
      category: topic,
      user: "Siapa aja",
      text: title,
      details,
      time: new Date().toLocaleString(),
      comments: [],
    };
    setDiscussions([newDiscussion, ...discussions]);
  };

  const addComment = (discussionId, commentText) => {
    setDiscussions((prevDiscussions) =>
      prevDiscussions.map((discussion) =>
        discussion.id === discussionId
          ? {
              ...discussion,
              comments: [
                ...discussion.comments,
                {
                  user: "Siapa aja",
                  text: commentText,
                  time: new Date().toLocaleString(),
                },
              ],
            }
          : discussion
      )
    );
  };

  return (
    <ForumContext.Provider value={{ discussions, addComment, addDiscussion }}>
      {children}
    </ForumContext.Provider>
  );
};

export default ForumProvider;
