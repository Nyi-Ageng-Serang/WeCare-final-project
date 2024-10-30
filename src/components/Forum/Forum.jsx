import Diskusi from "./Diskusi";
import Hero from "./HeroSection";
import Sidebar from "./Sidebar";

function Forum() {
  return (
    <>
      <Hero />
      <div className="flex gap-20 px-10">
        <Sidebar />
        <Diskusi />
      </div>
    </>
  );
}

export default Forum;
