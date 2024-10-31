import DiscussionList from "./DiscussionList";
import Searchbar from "./Searchbar";

function Diskusi() {
  return (
    <>
      <div className="w-3/4 my-10">
        <Searchbar />
        <DiscussionList />
      </div>
    </>
  );
}

export default Diskusi;
