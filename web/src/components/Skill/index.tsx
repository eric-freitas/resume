import React  from 'react';

import './index.scss';

export interface SkillProps {
    text?       : string,
    name        : string,
    level       : number,
    maxLevel    : number
}

const Skill:React.FC<SkillProps> = (props) => {
    
    const { text, name, level, maxLevel } = props;

    let items=[];
    
    for(var i=1;i<=maxLevel;i++) {
        const dotClass = `skill__dot ${(i <= level && "--selected") || ""}`;

        items.push(<span key={i} className={dotClass}></span>)        
    }

    const subText = (text && <span className="skill__text">{text}</span>) || null;

    return (
        <div className="skill">
            <div className="skill__section">
                <span className="skill__title">{name}</span>
                <span className="skill__dots"> {items}</span>
            </div>
            {subText}
        </div>
    )
}

export default Skill;