import React  from 'react';
import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'react-i18next';

import './index.scss';

export interface EducationItemProps {
    title        : string,
    conclusion?  : string,
    start?       : string,
    institution? : string,
    position?    : string
    detail?      : string,
    attribution? : string[]
}


const EducationItem:React.FC<EducationItemProps> = (props) => {
    const { title, conclusion, institution, position, detail,attribution } = props;
    const { t } = useTranslation();

    let duration =  (conclusion && (<span className="concluded">{t('experience.concluded').replace("%1", conclusion)}</span>)) || null;

    const mdDetail = (detail && <ReactMarkdown>{detail}</ReactMarkdown>) || null
    const attributionList = (attribution && attribution.length && (<ul>{
        attribution.map((item, index) => <li key={index}><ReactMarkdown>{item}</ReactMarkdown></li>)
    }</ul>)) || null;

    return (
        <li className="education-item">
            <h4><ReactMarkdown className="education-item__title">{title}</ReactMarkdown></h4>
            <p><span>{institution}{position}</span>{duration}</p>
            {mdDetail}
            {attributionList}
        </li>
    )
}

export default EducationItem;