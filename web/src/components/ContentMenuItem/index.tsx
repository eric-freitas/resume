import React  from 'react';

import './content-menu-item.scss';

export interface ContentMenuItemProps {
    text     : string,
    onClick  : () => void,
    selected : boolean
}

const ContentMenuItem:React.FC<ContentMenuItemProps> = (props) => {
    const { text, selected, onClick } = props;
    
    const className = `content-menu-item ${selected ? "--selected" : ""}`;

    return (
       <li className={className} onClick={() => onClick()}>{text}</li>
    )
}

export default ContentMenuItem;