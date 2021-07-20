import React  from 'react';
import { useState } from 'react';
import IconChevronDown from '../../../components/Icons/ChevronDown';
import IconChevronUp from '../../../components/Icons/ChevronUp';

import './education-section.scss';

export interface EducationSectionProps {
    name        : string
}


const EducationSection:React.FC<EducationSectionProps>= ({ children, ...props })  => {
    
    const [ visible, setVisible ] = useState<boolean>(true);

    const icon = visible ? <IconChevronUp onClick={() => setVisible(false)}/> : <IconChevronDown onClick={() => setVisible(true)}/>;

    const { name } = props;

    const items = (visible && 
        (<ul className="education-section__content">
            {children}
        </ul>)
    ) || null;

    return (
        <div className="education-section">
            <h3 className="education-section__title">
                {name}
                {icon}
            </h3>
            { items}
        </div>
    )
}

export default EducationSection;