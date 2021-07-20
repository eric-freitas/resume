import React  from 'react';
import ReactMarkdown from 'react-markdown'
import { ExperienceAttributionData } from '../../models/Experience';


const ExperienceAttribution:React.FC<ExperienceAttributionData> = (props) => {
    const { text, attribution } = props;

    const subList = 
    (   attribution && 
        attribution.length && 
        (<ul>{attribution.map((item, index) => <ExperienceAttribution key={index} {...item} />)}</ul>)
    ) || null;

    return (
        <li>
            <ReactMarkdown>{text}</ReactMarkdown>
            {subList}
        </li>
    )
}

export default ExperienceAttribution;