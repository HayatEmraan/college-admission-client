import React from "react";
import HomeBanner from "../../Libs/HomeBanner/HomeBanner";
import StudyStats from "../../Libs/StudyStats/StudyStats";
import CollegeCard from "../../Libs/CollegeCard/CollegeCard";
import { Helmet } from "react-helmet-async";
import QuickLinks from "../../Libs/QuickLinks/QuickLinks";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CAC | Home</title>
      </Helmet>
      <HomeBanner />
      <StudyStats />
      <CollegeCard />
      <QuickLinks />
    </div>
  );
};

export default Home;
