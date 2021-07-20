import React  from 'react';
import ReactMarkdown from 'react-markdown'

import './index.scss';
import ExperienceAttribution from '../ExperienceAttribution';
import { ExperienceData } from '../../models/Experience';


const ExperienceItem:React.FC<ExperienceData> = (props) => {
    const { company, conclusion, start, position, detail, attribution } = props;

    console.log(detail, attribution);

    const mdDetail = (detail && <ReactMarkdown className="experience-item__detail">{detail}</ReactMarkdown>) || null
    const attributionList = 
        (   attribution && 
            attribution.length && 
            (<ul className="experience-item__attribution">{attribution.map((item, index) => <ExperienceAttribution key={index} {...item} />)}</ul>)
        ) || null;

    return (
        <div className="experience-item">
            <div className="experience-item__duration">
                <h4><ReactMarkdown className="exp-item__title">{company}</ReactMarkdown></h4>
                <span>{start}-{conclusion}</span>
            </div>
            <div className="experience-item__content">
                <span className="experience-item__position">{position}</span>
                {mdDetail}
                {attributionList}
            </div>
        </div>
    )
}

export default ExperienceItem;