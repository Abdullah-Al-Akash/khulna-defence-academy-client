import React from "react";
import bookCover from "../../assets/book-cover.png";

const BookCard = () => {
  return (
    <div className="shadow-2xl rounded-md px-[10px] bg-[#0e412d] py-[15px] h-[520px]">
      <div className="p-[10px]">
        <img
          className="mx-auto w-full rounded-md h-[350px]"
          src={bookCover}
          alt="Book Cover"
        />
      </div>
      <div className="md:px-[10px]">
        <div>
          <h3 className="text-yellow-400 font-bold text-xl">
            ওয়েব ডেভেলপমেন্ট
          </h3>
          <p className="text-white">লেখকঃ আব্দুল্লাহ আল আকাশ</p>
        </div>
        <div className="flex justify-between items-center mt-[15px]">
          <h3 className="text-yellow-400 text-2xl">৳১০১</h3>
          <button className="btn bg-yellow-400 text-black border-black hover:bg-black hover:text-yellow-400">
            এখনি কিনুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
