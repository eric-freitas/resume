import React  from 'react';
import ReactMarkdown from 'react-markdown'

import './index.scss';
import ExperienceAttribution from '../ExperienceAttribution';
import { ExperienceData } from '../../models/Experience';
import { useState } from 'react';


const ExperienceItem:React.FC<ExperienceData> = (props) => {
    const { company, conclusion, start, position, detail, attribution } = props;

    const [ expanded, setExpanded ] = useState<boolean>(true);

    const mdDetail = (detail && expanded && <ReactMarkdown className="experience-item__detail">{detail}</ReactMarkdown>) || null
    const attributionList = 
        (   attribution && 
            expanded &&
            attribution.length && 
            (<ul className="experience-item__attribution">{attribution.map((item, index) => <ExperienceAttribution key={index} {...item} />)}</ul>)
        ) || null;

    const className = `experience-item ${expanded ? "--expanded" : ""}`;

    return (
        <div className={className}>
            <div className="experience-item__duration">
                <h4><ReactMarkdown className="exp-item__title">{company}</ReactMarkdown></h4>
                <span>{start}-{conclusion}</span>
            </div>
            <div className="experience-item__splitter">
                <div className="experience-item__bar"></div>
                <div className="experience-item__dot" onClick={()=>setExpanded(!expanded)}></div>
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