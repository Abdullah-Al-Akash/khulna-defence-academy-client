import React from "react";
import FAQ from "../../assets/faq.png";

const QAPage = () => {
  return (
    <div className="md:px-[84px] py-12">
      <h3 className="text-center font-bold text-[15px]">বহুল জিজ্ঞাসিত</h3>
      <h1 className="text-center font-bold text-[35px]">প্রশ্নের উত্তর</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-8">
        <div>
          <img className="w-3/4 mx-auto" src={FAQ} alt="" />
        </div>
        <div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium text-yellow-400 bg-[#092e20]">
              প্রশ্নের উত্তর দিন
            </div>
            <div className="collapse-content">
              <p>
                আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক
                যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে। এর পর একে
                একে বাংলা উইকিপিডিয়া, ওয়ার্ডপ্রেস বাংলা কোডেক্সসহ বিভিন্ন বাংলা
                অনলাইন পত্রিকা তৈরির কাজ করতে করতে বাংলার সাথে নিজেকে বেঁধে
                নিয়েছি আষ্টেপৃষ্ঠে। বিশেষ করে অনলাইন পত্রিকা তৈরি করতে ডিযাইন
                করার সময়, সেই ডিযাইনকে কোডে রূপান্তর করবার সময় বারবার অনুভব
                করেছি কিছু নমুনা লেখার।
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-yellow-400 bg-[#092e20]">
              প্রশ্নের উত্তর দিন
            </div>
            <div className="collapse-content">
              <p>
                আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক
                যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে। এর পর একে
                একে বাংলা উইকিপিডিয়া, ওয়ার্ডপ্রেস বাংলা কোডেক্সসহ বিভিন্ন বাংলা
                অনলাইন পত্রিকা তৈরির কাজ করতে করতে বাংলার সাথে নিজেকে বেঁধে
                নিয়েছি আষ্টেপৃষ্ঠে। বিশেষ করে অনলাইন পত্রিকা তৈরি করতে ডিযাইন
                করার সময়, সেই ডিযাইনকে কোডে রূপান্তর করবার সময় বারবার অনুভব
                করেছি কিছু নমুনা লেখার।
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-yellow-400 bg-[#092e20]">
              প্রশ্নের উত্তর দিন
            </div>
            <div className="collapse-content">
              <p>
                আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক
                যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে। এর পর একে
                একে বাংলা উইকিপিডিয়া, ওয়ার্ডপ্রেস বাংলা কোডেক্সসহ বিভিন্ন বাংলা
                অনলাইন পত্রিকা তৈরির কাজ করতে করতে বাংলার সাথে নিজেকে বেঁধে
                নিয়েছি আষ্টেপৃষ্ঠে। বিশেষ করে অনলাইন পত্রিকা তৈরি করতে ডিযাইন
                করার সময়, সেই ডিযাইনকে কোডে রূপান্তর করবার সময় বারবার অনুভব
                করেছি কিছু নমুনা লেখার।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAPage;
