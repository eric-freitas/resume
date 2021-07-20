import React  from 'react';
import ReactMarkdown from 'react-markdown'

import './index.scss';
import ExperienceAttribution from '../ExperienceAttribution';
import { ExperienceItemData } from '../../models/ExperienceItem';


const ExperienceItem:React.FC<ExperienceItemData> = (props) => {
    const { company, conclusion, start, position, detail,attribution } = props;


    const mdDetail = (detail && <ReactMarkdown>{detail}</ReactMarkdown>) || null
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