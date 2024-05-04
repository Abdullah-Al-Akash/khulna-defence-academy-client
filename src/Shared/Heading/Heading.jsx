import { useContext } from "react";
import logo from "../../assets/logo1-01-01.png";
import supportImg from "../../assets/support.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Heading = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleUserLogOut = () => {
    // Show confirmation dialog before logging out
    Swal.fire({
      title: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, proceed with logout
        logOut()
          .then(() => {
            // Sign-out successful, show success SweetAlert
            Swal.fire({
              icon: "success",
              title: "Logged Out Successfully!",
              text: "You have been logged out.",
            });
          })
          .catch((error) => {
            // Error during logout, show error alert
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: errorMessage,
            });
            console.error(errorCode, errorMessage);
          });
      }
    });
  };

  return (
    <div className="bg-gray-200">
      <div className="px-[20px] border-b-2 md:mx-[100px]">
        {/* For Large Device: */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between">
            <div className="w-1/8">
              <Link to="/">
                <img width="100px" className="" src={logo} alt="" />
              </Link>
            </div>
            <div className="w-1/8">
              <h2 className="text-3xl font-extrabold py-[5px]">
                Khulna <span className="text-yellow-700">Defence Coaching</span>
              </h2>
              <h4 className="font-bold text-xl pb-[4px]">
                Come | Learn | Conquer
              </h4>
            </div>
            <div className="w-1/8 flex justify-center items-center gap-4">
              <img src={supportImg} alt="" />
              <div>
                <h3 className="text-gray-400">হটলাইন</h3>
                <h3 className="text-center font-bold text-xl">01970-181233</h3>
              </div>
            </div>
            <div className="w-1/8">
              {user ? (
                <>
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="m-1">
                      <div className="text-center">
                        <div className="avatar online">
                          <div className="w-14 rounded-full border-4 shadow-xl border-black">
                            <img src="https://cdn5.vectorstock.com/i/1000x1000/55/19/modern-army-soldier-icon-simple-style-vector-10885519.jpg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link
                          to="/profile"
                          className=" text-black font-semibold hover:bg-black hover:text-yellow-400"
                        >
                          My Profile
                        </Link>
                      </li>
                      {user?.email == "aabdullahalakash@gmail.com" ||
                      user?.email == "kdc2018.web@gmail.com" ? (
                        <li>
                          <Link
                            to="/dashboard"
                            className=" text-black font-semibold hover:bg-black hover:text-yellow-400 mt-4"
                          >
                            Dashboard
                          </Link>
                        </li>
                      ) : (
                        ""
                      )}
                      <li className="mt-4">
                        <button
                          onClick={handleUserLogOut}
                          className=" text-black font-semibold hover:bg-black hover:text-yellow-400"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <Link to="login">
                    <button className="px-[10px] py-[5px] rounded-md md:text-2xl bg-yellow-400 text-black font-semibold hover:bg-black hover:text-yellow-400">
                      Login
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {/* For Mobile Device */}
        <div className="block md:hidden pt-[6px]">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/">
                <img className="" width="70px" src={logo} alt="" />
              </Link>
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-center">
                Khulna Defence <span className="text-yellow-400">Coaching</span>
              </h2>
            </div>
            <div className="">
              {user ? (
                <>
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="m-1">
                      <div className="text-center">
                        <div className="avatar online">
                          <div className="w-14 rounded-full border-4 shadow-xl border-black">
                            <img src="https://cdn5.vectorstock.com/i/1000x1000/55/19/modern-army-soldier-icon-simple-style-vector-10885519.jpg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link
                          to="/profile"
                          className=" text-black font-semibold hover:bg-black hover:text-yellow-400"
                        >
                          My Profile
                        </Link>
                      </li>
                      <li className="mt-4">
                        <button
                          onClick={handleUserLogOut}
                          className=" text-black font-semibold hover:bg-black hover:text-yellow-400"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <Link to="login">
                    <button className="px-[5px] py-[2px] rounded-md md:text-2xl bg-yellow-400 text-black font-semibold hover:bg-black hover:text-yellow-400">
                      Login
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
