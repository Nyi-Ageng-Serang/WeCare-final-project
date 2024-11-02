import Blog from "./Blog";
import Career from "./Career";
import Fitur from "./Fitur";
import Hero from "./Hero";
import Partner from "./Partner";
import Story from "./Story";

function Homepage() {
  return (
    <>
      <Hero />
      <Fitur />
      <Career />
      <Story />
      <Blog />
      <Partner />
    </>
  );
}

export default Homepage;
