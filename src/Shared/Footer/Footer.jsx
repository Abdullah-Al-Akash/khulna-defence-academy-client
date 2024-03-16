import React from "react";
import logo from "../../assets/logo1-01-01.png";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer grid md:grid-cols-4 grid-cols-1 gap-4 md:px-[84px] px-[20px] py-4 bg-[#092e20]">
        <nav className="">
          <div className="mx-auto">
            <img className="" src={logo} alt="" />
          </div>
          <h3 className="text-center text-white py-[10px]">
            আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক
            যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে। এর পর একে একে
            বাংলা উইকিপিডিয়া
          </h3>
          <div className="flex items-center !justify-center mx-auto">
            <div>
              <FaFacebookF className="text-white text-[35px] cursor-pointer hover:bg-yellow-500 hover:text-black hover:transition hover:duration-700 hover:ease-in-out rounded-full bg-black p-2 me-[7px]"></FaFacebookF>
            </div>
            <div>
              <TfiYoutube className="text-white text-[35px] cursor-pointer hover:bg-yellow-500 hover:text-black hover:transition hover:duration-700 hover:ease-in-out rounded-full bg-black p-1"></TfiYoutube>
            </div>
          </div>
        </nav>
        <nav className="text-white md:ms-[70px] mt-[30px]">
          <h6 className="footer-title ">সাইটম্যাপ</h6>
          <a className="link link-hover  hover:text-yellow-500">মূল পাতা</a>
          <a className="link link-hover  hover:text-yellow-500">
            আমাদের সম্পর্কে
          </a>
          <a className="link link-hover  hover:text-yellow-500">গ্যালারি</a>
          <a className="link link-hover  hover:text-yellow-500">বইসমূহ</a>
          <a className="link link-hover  hover:text-yellow-500">যোগাযোগ</a>
        </nav>
        <nav className="text-white mt-[30px]">
          <h6 className="footer-title ">সাহায্য</h6>
          <a className="link link-hover  hover:text-yellow-500">
            প্রশ্নের উত্তর
          </a>
          <a className="link link-hover  hover:text-yellow-500">গোপনীয়তা</a>
          <a className="link link-hover  hover:text-yellow-500">নীতি</a>
          <a className="link link-hover  hover:text-yellow-500">সাহায্য</a>
          <a className="link link-hover  hover:text-yellow-500">ডকুমেন্টেশন</a>
        </nav>
        <nav className="text-white mt-[30px]">
          <h6 className="footer-title">যোগাযোগ করুন</h6>
          <a className="link link-hover flex  justify-center items-center">
            <FaHome className="text-yellow-400 text-[45px] me-[15px]"></FaHome>
            ২৯/১, শেরে-বাংলা রোড (ময়লাপোতা মোড়, শাপলা ক্লিনিকের পাশে), খুলনা।
          </a>
          <a className="link link-hover flex  justify-center items-center">
            <IoCall className="text-yellow-400 text-[25px] me-[15px]"></IoCall>
            +3 123 456 789
          </a>
          <a className="link link-hover flex  justify-center items-center">
            <MdEmail className="text-yellow-400 text-[25px] me-[15px]"></MdEmail>
            info@yourmail.com
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
