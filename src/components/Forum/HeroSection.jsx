import forum from "../../assets/Forum.png";

function Hero() {
  return (
    <>
      <header
        className="bg-cover bg-center h-80 flex items-center justify-center"
        style={{ backgroundImage: `url(${forum})` }}
      >
        <h1 className="text-white text-3xl font-bold tracking-wide">
          SELAMAT DATANG DI FORUM DISKUSI
        </h1>
      </header>
    </>
  );
}

export default Hero;
