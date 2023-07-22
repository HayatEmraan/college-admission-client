import React from "react";
import HomeBanner from "../../Libs/HomeBanner/HomeBanner";
import StudyStats from "../../Libs/StudyStats/StudyStats";
import CollegeCard from "../../Libs/CollegeCard/CollegeCard";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CAC | Home</title>
      </Helmet>
      <HomeBanner />
      <StudyStats />
      <CollegeCard />
    </div>
  );
};

export default Home;
