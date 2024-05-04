import React from "react";
import BookCard from "./BookCard";

const BookList = () => {
  return (
    <div id="our-books" className="md:px-[84px] px-[10px] mt-[30px]">
      <h3 className="text-center text-2xl py-[10px] font-bold">
        আমাদের বইসমূহ
      </h3>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-8 py-[30px]">
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
      </div>
    </div>
  );
};

export default BookList;
