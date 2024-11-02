import Logo from "../../assets/logoWecare.png";

function Blog() {
  return (
    <>
      <div className="w-full py-6 my-6">
        <div className="container mx-auto py-10 px-10">
          <div className="flex justify-between items-center my-4">
            <h1 className="text-2xl font-bold my-4">Berita Terbaru</h1>
            <div>
              <button className="px-2 pb-1 bg-red text-softPink text-2xl font-bold rounded-md mr-2">
                &lt;
              </button>
              <button className="px-2 pb-1 bg-red text-softPink text-2xl font-bold rounded-md">
                &gt;
              </button>
            </div>
          </div>

          <div className="flex flex-nowrap lg:flex-row justify-between gap-4 items-start tracking-normal overflow-auto py-4">
            <div className="border-2 border-softPink flex flex-col items-center justify-center rounded-lg">
              <img src={Logo} alt="" />

              <div className="p-4 w-64">
                <h1 className="text-xl font-semibold my-4">
                  Tes minat bakat kerja
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  nesciunt dolor suscipit ut beatae vitae excepturi voluptas
                  tenetur distinctio magnam autem qui sed aliquam eius
                  repellendus quibusdam ea, quam ratione.
                </p>
              </div>
            </div>

            <div className="border-2 border-softPink flex flex-col items-center justify-center rounded-lg">
              <img src={Logo} alt="" />

              <div className="p-4 w-64">
                <h1 className="text-xl font-semibold my-4">
                  Tes minat bakat kerja
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  nesciunt dolor suscipit ut beatae vitae excepturi voluptas
                  tenetur distinctio magnam autem qui sed aliquam eius
                  repellendus quibusdam ea, quam ratione.
                </p>
              </div>
            </div>

            <div className="border-2 border-softPink flex flex-col items-center justify-center rounded-lg">
              <img src={Logo} alt="" />

              <div className="p-4 w-64">
                <h1 className="text-xl font-semibold my-4">
                  Tes minat bakat kerja
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  nesciunt dolor suscipit ut beatae vitae excepturi voluptas
                  tenetur distinctio magnam autem qui sed aliquam eius
                  repellendus quibusdam ea, quam ratione.
                </p>
              </div>
            </div>

            <div className="border-2 border-softPink flex flex-col items-center justify-center rounded-lg">
              <img src={Logo} alt="" />

              <div className="p-4 w-64">
                <h1 className="text-xl font-semibold my-4">
                  Tes minat bakat kerja
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  nesciunt dolor suscipit ut beatae vitae excepturi voluptas
                  tenetur distinctio magnam autem qui sed aliquam eius
                  repellendus quibusdam ea, quam ratione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
