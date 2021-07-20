import React  from 'react';
import Experience from '../Experience';
import Skills from '../Skills';

import './content.scss';

const Content = () => {

  return (
       <section className="main-content" id="main-content">
           <Skills/>
           <Experience/>
       </section>
    )
}

export default Content;