import React  from 'react';
import { useState } from 'react';
import IconChevronDown from '../../../components/Icons/ChevronDown';
import IconChevronUp from '../../../components/Icons/ChevronUp';

import './skill-group.scss';

export interface SkillGroupProps {
    name        : string
}


const SkillGroup:React.FC<SkillGroupProps>= ({ children, ...props })  => {
    
    const [ visible, setVisible ] = useState<boolean>(true);

    const icon = visible ? <IconChevronUp onClick={() => setVisible(false)}/> : <IconChevronDown onClick={() => setVisible(true)}/>;

    const { name } = props;

    const items = (visible && 
        (<div className="skill-group__content">
            {children}
        </div>)
    ) || null;

    return (
        <div className="skill-group">
            <h3 className="skill-group__title">
                {name}
                {icon}
            </h3>
            { items}
        </div>
    )
}

export default SkillGroup;