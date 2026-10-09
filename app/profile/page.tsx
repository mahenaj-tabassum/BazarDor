const ProfilePage = () => {
  const inputClass =
    "mt-2 w-full rounded border border-ink/30 bg-transparent px-4 py-2.5 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

  return (
    <div className="mx-6 my-10 md:mx-0">
      <div className="md:w-3xl mx-auto">
        <h2 className="text-2xl font-bold md:text-3xl">আমার প্রোফাইল</h2>
        <p className="text-muted text-[14px]">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>

        <div className="bg-white mt-5 px-5 py-4 flex items-center justify-between rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="h-15 w-15 rounded-xl flex items-center justify-center bg-gray-100">
              M
            </div>
            <div>
              <h2 className="font-semibold text-2xl">Name</h2>
              <p className="text-muted">Email</p>
            </div>
          </div>

          <button className="border border-error rounded px-3 py-1 text-error">
            ↩ সাইন আউট
          </button>
        </div>

        <div className="bg-white md:mt-18 mt-5 px-5 py-4 rounded-2xl">
          <h3 className="text-2xl font-semibold">তথ্য</h3>
          <form className="md:w-2xl mx-auto my-5">
            <label>
              নাম
              <input
                type="text"
                className={inputClass}
                placeholder="আপনার নাম আপডেট করুন"
              />
            </label>
            <button className="mt-6 cursor-pointer w-full rounded-lg bg-accent px-4 py-3 font-medium text-white transition-opacity hover:opacity-90">
              আপডেট
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
