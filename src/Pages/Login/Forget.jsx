import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgetPassword = (e) => {
    e.preventDefault();

    // Send password reset email
    resetPassword(email)
      .then(() => {
        // Password reset email sent successfully, show success SweetAlert
        Swal.fire({
          icon: "success",
          title: "পাসওয়ার্ড রিসেট ইমেল পাঠানো হয়েছে!",
          text: "আপনার পাসওয়ার্ড রিসেট করার নির্দেশাবলীর জন্য অনুগ্রহ করে আপনার ইমেল ইনবক্স চেক করুন।",
        });
        navigate("/");
      })
      .catch((error) => {
        // Error sending password reset email, show error SweetAlert
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
        console.error(errorCode, errorMessage);
        navigate("/");
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-[10px]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <form onSubmit={handleForgetPassword}>
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
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="btn bg-yellow-400 text-black font-semibold hover:bg-black hover:text-yellow-400"
            >
              ফরগেট করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forget;
