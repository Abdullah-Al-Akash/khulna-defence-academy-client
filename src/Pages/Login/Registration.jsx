import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
  const { createUserUsingEmailAndPassword, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUserRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form?.userName?.value;
    const mobileNumber = form?.mobileNumber?.value;
    const email = form?.email?.value;
    const password = form?.password?.value;
    const confirmPassword = form?.confirmPassword?.value;

    if (password !== confirmPassword) {
      // Passwords don't match, show SweetAlert error popup
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password and Confirm Password do not match!",
      });
    } else {
      // Passwords match, try to register the user
      createUserUsingEmailAndPassword(email, password)
        .then((userCredential) => {
          // User registration successful, show success SweetAlert
          Swal.fire({
            icon: "success",
            title: "Registration Successful!",
            text: "You are now registered.",
          });
          const user = userCredential.user;
          console.log(user);
          updateUserProfile(displayName);
          navigate("/");
        })
        .catch((error) => {
          // Error during registration, show error SweetAlert
          const errorCode = error.code;
          let errorMessage = error.message;
          if (
            errorCode === "auth/email-already-in-use"
          ) {
            // Modify error message for Bengali users
            errorMessage = "এই ইমেল ঠিকানা ইতিমধ্যে ব্যবহৃত হয়েছে!";
          }
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage,
          });
          console.error(errorCode, errorMessage);
          navigate("/");
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-[10px]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        {/* <h2 className="text-2xl font-bold mb-4 text-center">লগিন করুন</h2> */}
        <form onSubmit={handleUserRegister}>
          <div className="mb-4">
            <label htmlFor="userName" className="block text-gray-600">
              আপনার নাম
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              style={{ outline: "none" }}
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block text-gray-600">
              মোবাইল নাম্বার
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
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
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="btn bg-yellow-400 text-black font-semibold hover:bg-black hover:text-yellow-400"
            >
              রেজিস্ট্রেশন করুন
            </button>
            <Link to="/login" className="ms-2 text-sm text-gray-600 hover:underline">
              একাউন্ট আছে? লগিন করুন
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
