import Logo from "../../assets/logoWecare.png";
import Tes from "../../assets/8.png";
import Pelatihan from "../../assets/9.png";
import Blog from "../../assets/Blog.png";
import Forum from "../../assets/10.png";
import Loker from "../../assets/11.png";

function Fitur() {
  return (
    <div className="bg-softPink">
      <div className="w-full py-6 my-8">
        <div className="container mx-auto px-10">
          <h1 className="text-center text-3xl font-bold mb-6">
            Fitur Unggulan WeCare
          </h1>
          <div className="flex flex-nowrap lg:flex-row justify-between gap-4 items-start tracking-normal overflow-auto py-6">
            <div className="bg-backgroud p-2 grid justify-items-center rounded-lg shadow-md">
              <img src={Tes} alt="" width={120} />
              <p className="w-48 text-center">Tes minat bakat kerja</p>
            </div>

            <div className="bg-backgroud p-2 grid justify-items-center rounded-lg shadow-md">
              <img src={Pelatihan} alt="" width={120} />
              <p className="w-48 text-center">Sumber daya pelatihan</p>
            </div>

            <div className="bg-backgroud p-2 grid justify-items-center rounded-lg shadow-md">
              <img src={Loker} alt="" width={120} />
              <p className="w-48 text-center">Lowongan kerja</p>
            </div>

            <div className="bg-backgroud p-2 grid justify-items-center rounded-lg shadow-md">
              <img src={Forum} alt="" width={120} />
              <p className="w-48 text-center">Forum Diskusi</p>
            </div>

            <div className="bg-backgroud p-2 grid justify-items-center rounded-lg shadow-md">
              <img src={Blog} alt="" width={120} />
              <p className="w-48 text-center">Blog Edukasi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fitur;
