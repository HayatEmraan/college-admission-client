import React from 'react';
import HomeBanner from '../../Libs/HomeBanner/HomeBanner';
import StudyStats from '../../Libs/StudyStats/StudyStats';
import CollegeCard from '../../Libs/CollegeCard/CollegeCard';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <StudyStats />
            <CollegeCard />
        </div>
    );
};

export default Home;