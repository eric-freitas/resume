import React  from 'react';
import { useState } from 'react';
import ContentMenu from '../ContentMenu';
import Experience from '../Experience';
import Skills from '../Skills';

import './content.scss';

const Content = () => {

    const [ menuSelected, setMenuSelected ] = useState<string>("skills");

    const onMenuSelected = (item: string) => {
        if (item !== menuSelected) {
            setMenuSelected(item);
        }
    }

    return (
       <section className="main-content" id="main-content">
           <ContentMenu onSelected={onMenuSelected}             />
           <Skills      selected={menuSelected === "skills"}    />
           <Experience  selected={menuSelected === "experience"}/>
       </section>
    )
}

export default Content;