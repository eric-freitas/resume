import React, { useEffect, useState }  from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import experienceService from '../../../services/experience';

import { ExperienceData } from '../../../models/Experience';

import ExperienceItem from '../../../components/ExperienceItem';
import ExperienceSection from '../ExperienceSection';
import Education from '../Education';

import './experience.scss'


const Experience = () => {

    const dispatch = useDispatch();
    const [ t, i18n ] = useTranslation();
    const language = i18n.language;

    const [ experience, setExperience ] = useState<ExperienceData[]>([]);

    useEffect(() => {
        experienceService()
             .listMyExperience(language, dispatch)
             .then((e:any) => {
                  const newExperience:ExperienceData[] = e?.data;
                  if (newExperience) {
                    setExperience(newExperience);
                  }
              })
    }, [language, dispatch])

    const itens = (
        experience &&
        experience.map (_item => <ExperienceItem key={_item.conclusion} {..._item} /> )
    ) || null;

    return (
        
       <section className="experience-section">
            <Education/>
            
            <ExperienceSection name={t('experience.professional')}>
                {itens}                
            </ExperienceSection>
       </section>
    )
}

export default Experience;