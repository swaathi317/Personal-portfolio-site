import React, { useState, useEffect } from 'react';
import CONSTANTS from '../constants/textConstants.json';

import './ExperienceSectionStyles.css';

const ExperienceSection = (props) => {
    const [activeJob, setActiveJob] = useState("0");

    let screenWidth = props.screenWidth;



    const styledText = (text, keywords) => {
        return text.split(" ").map(word => {
            let trimmedWord = word.replace(/[,.\s]+$/, '');
            if (keywords.includes(trimmedWord)) {

                return <span className="highlight-job-text">{word + " "} </span>;
            } else {
                return word + " ";
            }
        })
    }



    return (
        <div className="sectional-wrapper">
            <div id="experience" >
                <div className="section-header">
                    {CONSTANTS.experience.section_title}
                </div>
                <div className="experience-outer-container">
                    {screenWidth >= 850 &&
                        <>
                            <div className="roles-played-list">
                                <ul>
                                    {CONSTANTS.experience.experience_details.map((jobItem) => (
                                        <li className={activeJob === jobItem.job_id ? "job-item job-active" : "job-item"}
                                            onClick={() => setActiveJob(jobItem.job_id)}>{jobItem.job_name}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="experience-description">
                                <div className="role-and-company">
                                    {CONSTANTS.experience.experience_details[parseInt(activeJob)].job_name}
                                    <span className="highlight-job-text"> @ {CONSTANTS.experience.experience_details[parseInt(activeJob)].company_name}
                                    </span>
                                </div>
                                <div className="job-duration">
                                    {CONSTANTS.experience.experience_details[parseInt(activeJob)].job_duration}
                                </div>
                                <div className="job-description">
                                    <ul>
                                        {CONSTANTS.experience.experience_details[parseInt(activeJob)].job_description.map((descItem) => (
                                            <li>
                                                {styledText(descItem, CONSTANTS.experience.experience_details[parseInt(activeJob)].keywords_to_highlight)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </>
                    }
                    {
                        screenWidth < 850 &&

                        CONSTANTS.experience.experience_details.map((jobItem) => (
                            <div className="experience-description">
                                <div className="role-and-company">
                                    {jobItem.job_name}
                                    <span className="highlight-job-text"> @ {jobItem.company_name}
                                    </span>
                                </div>
                                <div className="job-duration">
                                    {jobItem.job_duration}
                                </div>
                                <div className="job-description">
                                    <ul>
                                        {jobItem.job_description.map((descItem) => (
                                            <li>
                                                {styledText(descItem, jobItem.keywords_to_highlight)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>



            </div>
        </div>

    )
}

export default ExperienceSection;