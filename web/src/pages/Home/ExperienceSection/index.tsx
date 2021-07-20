import React  from 'react';
import { useState } from 'react';
import IconChevronDown from '../../../components/Icons/ChevronDown';
import IconChevronUp from '../../../components/Icons/ChevronUp';

import './experience-section.scss';

export interface ExperienceSectionProps {
    name        : string
}


const ExperienceSection:React.FC<ExperienceSectionProps>= ({ children, ...props })  => {
    
    const [ visible, setVisible ] = useState<boolean>(true);

    const icon = visible ? <IconChevronUp onClick={() => setVisible(false)}/> : <IconChevronDown onClick={() => setVisible(true)}/>;

    const { name } = props;

    const items = (visible && 
        (<div className="exp-section__content">
            {children}
        </div>)
    ) || null;

    return (
        <div className="exp-section">
            <h3 className="exp-section__title">
                {name}
                {icon}
            </h3>
            {items}
        </div>
    )
}

export default ExperienceSection;