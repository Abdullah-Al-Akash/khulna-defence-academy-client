import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import TopVar from "../../Shared/TopVar/TopVar";
import Heading from "../../Shared/Heading/Heading";

const Main = () => {
  // max-w-[1512px] xl:mx-auto  mx-3
  return (
    <div className="">
      {/* <TopVar></TopVar> */}
      <Heading></Heading>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
