import React, { useState, useEffect } from 'react';

//import section components
import Header from '../components/Header';
import SocialLinksBar from '../components/SocialLinksBar';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import BlogsSection from '../components/BlogsSection';
import RecommendationsSection from '../components/RecommendationsSection';


const Home = () => {

    return (
        <>
            <div className="body-wrapper">

                <Header />
                <SocialLinksBar />
                <div className="content-wrapper">

                    <AboutSection />
                    <BlogsSection />
                    <RecommendationsSection />
                </div>
                <footer> Designed & Developed by Swaathi </footer>
            </div>

        </>
    )
}

export default Home;