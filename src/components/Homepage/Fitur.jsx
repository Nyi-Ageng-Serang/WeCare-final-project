import Logo from "../../assets/logoWecare.png";

function Fitur() {
  return (
    <>
      <div className="w-full py-6 my-6">
        <div className="container mx-auto px-10">
          <h1 className="text-center text-4xl font-bold my-6">
            Fitur Unggulan WeCare
          </h1>
          <div className="flex flex-nowrap lg:flex-row justify-between gap-4 items-start tracking-normal overflow-auto py-4">
            <div className=" border-2 border-softPink p-2 grid justify-items-center rounded-lg">
              <img src={Logo} alt="" />
              <p className="w-48 text-center">Tes minat bakat kerja</p>
            </div>

            <div className=" border-2 border-softPink p-2 grid justify-items-center rounded-lg">
              <img src={Logo} alt="" />
              <p className="w-48 text-center">Sumber daya pelatihan</p>
            </div>

            <div className=" border-2 border-softPink p-2 grid justify-items-center rounded-lg">
              <img src={Logo} alt="" />
              <p className="w-48 text-center">CV Generator</p>
            </div>

            <div className=" border-2 border-softPink p-2 grid justify-items-center rounded-lg">
              <img src={Logo} alt="" />
              <p className="w-48 text-center">Project Portfolio</p>
            </div>

            <div className=" border-2 border-softPink p-2 grid justify-items-center rounded-lg">
              <img src={Logo} alt="" />
              <p className="w-48 text-center">Lowongan kerja</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fitur;
