import DiscussionItem from "./DiscussionItem";

function DiscussionList() {
  const discussions = [
    {
      category: "Freelance",
      user: "Jessica Casper",
      text: "Saya ingin berbagi pengalaman saya sebagai seseorang yang sudah bekerja sebagai freelancer selama tiga tahun.",
      time: "11:02 PM 12 Desember 2023",
    },
    {
      category: "Tips & Trik",
      user: "Emma Kazari",
      text: "Bagaimana cara mengatur waktu...",
      time: "10:42 PM 12 Desember 2023",
    },
    {
      category: "Life Style",
      user: "Devin Pane",
      text: "Menjaga gaya hidup saat sibuk bekerja...",
      time: "10:15 PM 12 Desember 2023",
    },
    {
      category: "STEM",
      user: "Esther Howard",
      text: "Pentingnya pendidikan STEM...",
      time: "10:01 PM 12 Desember 2023",
    },
  ];

  return (
    <>
      <div className="w-full my-10">
        {discussions.map((disc, index) => (
          <DiscussionItem key={index} {...disc} />
        ))}
      </div>
    </>
  );
}

export default DiscussionList;
