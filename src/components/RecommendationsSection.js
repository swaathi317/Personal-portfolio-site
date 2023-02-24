import React from 'react';
import CONSTANTS from '../constants/textConstants.json';

import './BlogsSectionStyles.css';

const RecommendationsSection = () => {


    return (
        <div className="sectional-wrapper">
            <div id="recommendations" >
                <div className="section-header">
                    {CONSTANTS.recommendations.section_title}
                </div>
                <div className="recommendations-wrapper">

                    {CONSTANTS.recommendations.recommendation_content.map((recItem) => (
                        <div className="rec-item">
                            <div className="rec-content"> {' " ' + recItem.recommendation_content + ' "'} </div>
                            <div>
                                <div className="rec-author-name"> {recItem.giver_name} </div>
                                <div className="rec-author-role"> {recItem.giver_role} </div>
                                <div className="rec-author-company"> {recItem.given_company}  </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>

    )
}

export default RecommendationsSection;