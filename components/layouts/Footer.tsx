const Footer = () => {
  return (
    <footer className="bg-white px-5 py-5 mt-10 border-t border-line">
      <div className="flex md:flex-row flex-col gap-2 justify-between items-center w-full max-w-6xl mx-auto">
        <p className="text-muted text-center md:text-left">বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
        <p className="text-muted text-center md:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
