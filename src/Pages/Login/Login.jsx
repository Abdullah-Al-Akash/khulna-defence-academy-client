import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form?.email?.value;
    const password = form?.password?.value;

    loginUser(email, password)
      .then((userCredential) => {
        // User login successful, show success SweetAlert
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "You are now logged in.",
        });
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        // Error during login, show error alert
        const errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === "auth/invalid-credential") {
          // Modify error message for Bengali users
          errorMessage = "আপনার ইমেল / পাসওয়ার্ড ভুল হয়েছে!";
        }
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
        console.error(errorCode, errorMessage);
        navigate("/");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-[10px]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        {/* <h2 className="text-2xl font-bold mb-4 text-center">লগিন করুন</h2> */}
        <form onSubmit={handleUserLogin}>
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

          <Link to="/forget" className="text-sm text-gray-600 hover:underline">
            পাসওয়ার্ড ভুলে গিয়েছেন? ফরগেট করুন
          </Link>

          <div className="mt-4 flex items-center justify-between">
            <button
              type="submit"
              className="btn bg-yellow-400 text-black font-semibold hover:bg-black hover:text-yellow-400"
            >
              লগিন করুন
            </button>
            <Link to="/registration" className="text-sm text-gray-600 hover:underline">
              একাউন্ট নেই? রেজিস্ট্রেশন করুন
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
