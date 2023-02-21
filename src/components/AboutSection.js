import React, { useState, useEffect } from 'react';
import profileImage from '../assets/images/profile_image.jpg';
import CONSTANTS from '../constants/textConstants.json';

import './AboutSectionStyle.css';

const AboutSection = () => {


    return (

        <div id="about" className="sectional-wrapper">
            <div className="about-wrapper">
                <div className="about-content-container">
                    <div className="name-container">
                        <div className="first-name-container">
                            Swaathi
                        </div>
                        <div className="last-name-container">
                            Sundaramurugan
                        </div>
                    </div>
                    <div className="position-container">
                        Data Engineer | Full Stack Developer
                    </div>
                    <div className="introduction-container">
                        I have experience in Full-Stack Development and Data Engineering. As a flexible technologist, I bring a special viewpoint to developing end-to-end solutions for challenging issues. I have a background in software engineering and a strong grasp of creating web applications with modern frameworks like React and Node.js. Additionally, I have experience designing and constructing cloud data pipelines, which convert raw data into actionable insights by integrating diverse data sources and formats. I have a lot of experience creating and optimizing schemas for both SQL and NoSQL databases. I have also worked with data warehousing tools like Amazon Redshift and Google BigQuery. I thrive as a committed problem solver when I can connect business and technology to produce significant results.
                    </div>
                </div>
                <div className="about-image-container">
                    <div className="image-square">
                        <div className="image-container">
                            <img src={profileImage} alt={CONSTANTS.header.logo_alt_text} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="stat-download-container">
                <div className="stat-container">
                    <div className="stat-item">
                        <div className="stat-number"> 3+ </div>
                        <div className="stat-description"> Years of Experience </div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number"> 10 </div>
                        <div className="stat-description"> Products developed and delivered for Enterprises </div>
                    </div>
                </div>
                <div className="download-container">
                    < a href="https://drive.google.com/file/d/1PkLhSOnFrTH4UR4cW8fMnmvfxcsBX7j7/view?usp=share_link" target="_blank" >
                        <div className="download-button">
                            Download Resume
                        </div>
                    </a>
                </div>
            </div>
        </div>


    )
}

export default AboutSection;