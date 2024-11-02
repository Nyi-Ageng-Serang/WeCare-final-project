import DiscussionItem from "./DiscussionItem";

function DiscussionList({ discussions }) {
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
