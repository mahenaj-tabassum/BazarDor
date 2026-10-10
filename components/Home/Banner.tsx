import Image from "next/image";
import BannerImg from "@/public/bazar-hero.png";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });
  return (
    <section className="bg-white rounded-2xl my-10 w-full px-8 py-10 md:py-5">
      <div className="md:flex-row flex-col flex items-center justify-between gap-5">
        <div>
          <span className="bg-accent/8 text-accent font-semibold rounded py-1 px-3">
            {date}
          </span>
          <h1 className="md:text-4xl text-3xl font-bold mt-7 mb-5">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="md:text-[18px] max-w-2xl text-muted">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <button className="my-5 bg-accent rounded text-white px-3 py-2 cursor-pointer">
            <a href="#সব-পণ্য">সব পণ্য দেখুন</a>
          </button>
        </div>
        <div>
          <Image src={BannerImg} alt="Banner Image" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
