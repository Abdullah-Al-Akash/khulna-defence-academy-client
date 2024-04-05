import React from "react";

const MyProfile = () => {
  return (
    <div className="min-h-screen">
      <div className="md:flex items-center justify-center">
        <div className="text-center">
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src="https://media.licdn.com/dms/image/D5603AQFGDobIsN6JfQ/profile-displayphoto-shrink_800_800/0/1684397636582?e=2147483647&v=beta&t=4zuyyzeS3faoqw-kSjgbeS0V7GHbNm0RoWJrPHZaXtQ" />
            </div>
          </div>
        </div>
        <div className="md:ms-8 md:text-start text-center">
          <h3 className="font-bold text-xl"> Abdullah Al Akash</h3>
          <h3 className="">aabdullahalakash@gmail.com</h3>
          <h3 className="">01859096600</h3>
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-center text-xl font-bold py-[20px]">
          My Dashboard
        </h3>
        <h3 className="text-center">There is no data found yet!</h3>
      </div>
    </div>
  );
};

export default MyProfile;
