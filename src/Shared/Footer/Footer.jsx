import React from "react";
import logo from "../../assets/logo1-01-01.png";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div id="contact" className="">
      <footer className="footer grid md:grid-cols-3 grid-cols-1 gap-4 md:px-[84px] px-[20px] py-4 bg-[#092e20]">
        <nav className="">
          <div className="mx-auto">
            <img className="" src={logo} alt="" />
          </div>
          <h3 className="text-center text-white py-[10px]">
            বাংলাদেশ সামরিক বাহিনীতে অফিসার পদে যোগদানের জন্য খুলনা বিভাগের
            একমাত্র পূর্ণাঙ্গ ট্রেনিং একাডেমি।
          </h3>
          <div className="flex items-center !justify-center mx-auto">
            <div>
              <a
                target="_blank"
                href="https://www.facebook.com/kdc2018.official"
              >
                <FaFacebookF className="text-white text-[35px] cursor-pointer hover:bg-yellow-500 hover:text-black hover:transition hover:duration-700 hover:ease-in-out rounded-full bg-black p-2 me-[7px]"></FaFacebookF>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://www.youtube.com/@khulnadefencecoaching7373"
              >
                <TfiYoutube className="text-white text-[35px] cursor-pointer hover:bg-yellow-500 hover:text-black hover:transition hover:duration-700 hover:ease-in-out rounded-full bg-black p-1"></TfiYoutube>
              </a>
            </div>
          </div>
        </nav>
        <div className="grid grid-cols-2">
          {/* <nav className="text-white md:ms-[70px] mt-[30px]">
            <h6 className="text-yellow-400 font-bold text-[16px] pb-[15px]">
              সাইটম্যাপ
            </h6>
            <h6 className="link link-hover  hover:text-yellow-500">মূল পাতা</h6>
            <h6 className="link link-hover  hover:text-yellow-500">
              আমাদের সম্পর্কে
            </h6>
            <h6 className="link link-hover  hover:text-yellow-500">গ্যালারি</h6>
            <h6 className="link link-hover  hover:text-yellow-500">বইসমূহ</h6>
            <h6 className="link link-hover  hover:text-yellow-500">যোগাযোগ</h6>
          </nav> */}
          {/* <nav className="text-white mt-[30px] ms-[60px]">
            <h6 className="text-yellow-400 font-bold text-[16px] pb-[15px] ">
              সাহায্য
            </h6>
            <h6 className="link link-hover  hover:text-yellow-500">
              প্রশ্নের উত্তর
            </h6>
            <h6 className="link link-hover  hover:text-yellow-500">
              গোপনীয়তা
            </h6>
            <h6 className="link link-hover  hover:text-yellow-500">নীতি</h6>
            <h6 className="link link-hover  hover:text-yellow-500">সাহায্য</h6>
            <h6 className="link link-hover  hover:text-yellow-500">
              ডকুমেন্টেশন
            </h6>
          </nav> */}
        </div>
        <nav className="text-white mt-[30px]">
          <h6 className="text-yellow-400 font-bold text-[16px] pb-[15px]">
            যোগাযোগ করুন
          </h6>
          <h6 className="link link-hover flex  justify-center items-center">
            <FaHome className="text-yellow-400 text-[30px] me-[15px]"></FaHome>
            ২৯/১, শেরে-বাংলা রোড (ময়লাপোতা মোড়, শাপলা ক্লিনিকের পাশে), খুলনা।
          </h6>
          <h6 className="link link-hover flex  justify-center items-center">
            <IoCall className="text-yellow-400 text-[25px] me-[15px]"></IoCall>
            01970-181233
          </h6>
          <h6 className="link link-hover flex  justify-center items-center">
            <MdEmail className="text-yellow-400 text-[25px] me-[15px]"></MdEmail>
            kdc2018.official@gmail.com
          </h6>
        </nav>
      </footer>
      <div className="bg-black text-white text-center p-2">
        <h3>Developed by <a className="text-yellow-200 underline" target="_blank" href="https://www.facebook.com/abdullah.akash.al/">Abdullah Al Akash</a> </h3>
      </div>
    </div>
  );
};

export default Footer;
