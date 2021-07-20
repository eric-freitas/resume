import React  from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Skill, SkillGroup } from  '../../../models/Skill';
import skillsService from '../../../services/skills';

import SkillGroupEl from '../../../components/SkillGroup';
import SkillEl from '../../../components/Skill';

import './skills.scss';
import { useState } from 'react';

const Skills = () => {

     const dispatch = useDispatch();

     //eslint-disable-next-line
     const [ t, i18n ] = useTranslation();
     const language = i18n.language;

     const [ skills, setSkills ] = useState<SkillGroup[]>([]);
 
     useEffect(() => {
          skillsService()
               .listMySkills(language, dispatch)
               .then((e:any) => {
                    const newSkills:SkillGroup[] = e?.data;
                    if (newSkills) {
                         setSkills(newSkills)
                    }
                })
     }, [language, dispatch])


     function renderSubItens(skills: Skill[]): React.ReactNode {
          return (
               skills &&
               skills.map(_skill => (
                    <SkillEl key={_skill.name} {..._skill}/>
               ))
          ) || null;
     }

     function renderItens(skills: SkillGroup[]): React.ReactNode {
          return (
               skills &&
               skills.map(_skill => {
                    const { name, skills } = _skill;
                    return (
                         <SkillGroupEl key={name} name={name}>
                              {renderSubItens(skills)}
                         </SkillGroupEl>
                    )
               })
          ) || null;
     }
     

     return (
          <section className="skills-section">
               {renderItens(skills)}
          </section>
     )
}

export default Skills;




