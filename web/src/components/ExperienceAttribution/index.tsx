import React  from 'react';
import ReactMarkdown from 'react-markdown'
import { ExperienceAttributionData } from '../../models/ExperienceItem';


const ExperienceAttribution:React.FC<ExperienceAttributionData> = (props) => {
    const { text, subItens } = props;

    const subList = 
    (   subItens && 
        subItens.length && 
        (<ul>{subItens.map((item, index) => <ExperienceAttribution key={index} {...item} />)}</ul>)
    ) || null;

    return (
        <li>
            <ReactMarkdown>{text}</ReactMarkdown>
            {subList}
        </li>
    )
}

export default ExperienceAttribution;