import DiscussionItem from "./DiscussionItem";
import { useContext } from "react";
import { ForumContext } from "../../context/ForumProvider";

function DiscussionList() {
  const { discussions } = useContext(ForumContext);

  return (
    <>
      <div className="w-full my-10">
        {discussions.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          discussions.map((item) => (
            <DiscussionItem
              key={item.id}
              id={item.id}
              category={item.category}
              user={item.user}
              text={item.text}
              time={item.time}
            />
          ))
        )}
      </div>
    </>
  );
}

export default DiscussionList;
