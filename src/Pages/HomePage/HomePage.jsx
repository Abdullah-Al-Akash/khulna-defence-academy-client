import React from "react";
import Banner from "./Banner";
import ApplySection from "./ApplySection";
import QAPage from "../QAPage/QAPage";
import AboutPage from "../AboutPage/AboutPage";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <ApplySection></ApplySection>
      <AboutPage></AboutPage>
      <QAPage></QAPage>
    </div>
  );
};

export default HomePage;
