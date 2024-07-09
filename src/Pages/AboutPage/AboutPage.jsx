import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "./AboutPage.css";
import AboutPreparation from "./AboutPreparation";

const AboutPage = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    fetch("https://khulna-defence-coaching-server.onrender.com/notices")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setNotices(data);
      });
  }, []);
  return (
    <div id="about-us" className="about-bg md:px-[84px] px-[10px] py-[30px]">
      <div className="md:grid md:grid-cols-3 gap-8">
        <div className="my-auto col-span-2">
          <h3 className="text-center text-[20px] font-bold">আমাদের সম্পর্কে</h3>
          <h1
            className="text-center text-[35px] font-bold mt-5 leading-10
"
          >
            খুলনা ডিফেন্স <br /> কোচিং এ স্বাগতম
          </h1>
          <p className="md:w-3/4 mx-auto py-[25px] text-center leading-7">
            আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক
            যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে। এর পর একে একে
            বাংলা উইকিপিডিয়া, ওয়ার্ডপ্রেস বাংলা কোডেক্সসহ বিভিন্ন বাংলা অনলাইন
            পত্রিকা তৈরির কাজ করতে করতে বাংলার সাথে নিজেকে বেঁধে নিয়েছি
            আষ্টেপৃষ্ঠে। বিশেষ করে অনলাইন পত্রিকা তৈরি করতে ডিযাইন করার সময়, সেই
            ডিযাইনকে কোডে রূপান্তর করবার সময় বারবার অনুভব করেছি কিছু নমুনা
            লেখার।
          </p>
        </div>
        <div className="bg-white shadow-2xl py-2 md:py-[35px] rounded-md">
          <h3 className="font-bold text-2xl md:text-[35px] text-center mb-4">
            অফিসার পদে <br /> চলমান সার্কুলার সমূহ
          </h3>
          {notices?.map((notice) => (
            <div key={notice._id} className="text-center">
              <a
                target="_blank"
                href={notice?.noticeLink}
                className="font-bold text-[20px] py-2 md:py-[15px] hover:text-yellow-500 cursor-pointer"
              >
                {notice?.notice}
              </a>
              <div className="flex justify-center items-center mt-4">
                <div>
                  <FaCalendarAlt className="text-[20px] text-yellow-500 me-2"></FaCalendarAlt>
                </div>
                <h3>আবেদনের শেষ তারিখঃ {notice?.lastDate}</h3>
              </div>
              <hr className="w-3/4 mx-auto mt-4"></hr>
            </div>
          ))}
        </div>
      </div>
      {/* <AboutPreparation></AboutPreparation> */}
    </div>
  );
};

export default AboutPage;
