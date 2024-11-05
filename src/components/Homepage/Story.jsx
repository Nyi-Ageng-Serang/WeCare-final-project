import story from "../../assets/story (2).png";

function Story() {
  return (
    <div className="w-full py-6 my-6">
      <div className="container mx-auto px-10">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 items-center tracking-normal">
          {/* Story Image */}
          <div className="lg:w-3/5 md:w-3/4 h-auto">
            <img src={story} alt="Story image" />
          </div>

          {/* Story Text */}
          <div className="w-full">
            <small className="inline-block font-bold uppercase text-red bg-softPink rounded-full px-6 py-2 shadow-md">
              Story
            </small>

            <h1 className="text-4xl text-gray-800 font-bold mb-4 mt-6">
              Masih ragu untuk berkarir kembali?
            </h1>

            <p className="mb-8 font-semibold">
              Yuk, simak kisah inspiratif para perempuan hebat yang berhasil
              menyeimbangkan karier dan keluarga. Temukan bagaimana mereka
              bekerja dengan waktu fleksibel, sehingga kamu bisa lebih percaya
              diri untuk kembali berkarier.
            </p>
            <a
              href="https://journal.revou.co/cerita-sukma/"
              target="_blank"
              className="inline-block font-semibold border-2 border-red bg-red text-white py-2 px-6 rounded-full hover:bg-softPink hover:border-softPink hover:text-red"
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
