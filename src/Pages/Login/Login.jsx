import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-[10px]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        {/* <h2 className="text-2xl font-bold mb-4 text-center">লগিন করুন</h2> */}
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              মোবাইল নাম্বার
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              style={{ outline: "none" }}
              placeholder="Mobile Number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              ইমেইল
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              style={{ outline: "none" }}
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              style={{ outline: "none" }}
              placeholder="Password"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-600">
              পুনরায় পাসওয়ার্ড দিন
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              style={{ outline: "none" }}
              placeholder="Confirm password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="btn bg-yellow-400 text-black font-semibold hover:bg-black hover:text-yellow-400"
            >
              লগিন করুন
            </button>
            <Link
              to="/registration"
              className="text-sm text-gray-600 hover:underline"
            >
              একাউন্ট নেই? রেজিস্ট্রেশন করুন
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
