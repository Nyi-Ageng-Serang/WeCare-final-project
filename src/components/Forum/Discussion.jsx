import DiscussionList from "./DiscussionList";
import Searchbar from "./Searchbar";

function Discussion({ discussions }) {
  return (
    <>
      <div className="w-full lg:w-3/4 my-10">
        <Searchbar />
        <DiscussionList discussions={discussions} />
      </div>
    </>
  );
}

export default Discussion;
