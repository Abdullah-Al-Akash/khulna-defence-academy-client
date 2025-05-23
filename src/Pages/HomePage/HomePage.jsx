import React from "react";
import Banner from "./Banner";
import ApplySection from "./ApplySection";
import QAPage from "../QAPage/QAPage";
import AboutPage from "../AboutPage/AboutPage";
import Course from "../Course/Course";
import BookList from "../BookList/BookList";
import Navbar from "../../Shared/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <ApplySection></ApplySection>
      <AboutPage></AboutPage>
      <Course></Course>
      <BookList></BookList>
      <QAPage></QAPage>
    </div>
  );
};

export default HomePage;
