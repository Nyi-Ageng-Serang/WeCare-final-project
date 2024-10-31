import forum from "../../assets/Forum.png";

function Hero() {
  return (
    <>
      <header
        className="bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url(${forum})` }}
      >
        <h1 className="text-white text-3xl font-bold tracking-wide">
          Selamat Datang Di Forum Diskusi
        </h1>
      </header>
    </>
  );
}

export default Hero;
