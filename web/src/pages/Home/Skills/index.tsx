import React  from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { SkillData, SkillGroupData } from  '../../../models/Skill';
import skillsService from '../../../services/skills';

import SkillGroup from '../../../components/SkillGroup';
import Skill from '../../../components/Skill';

import './skills.scss';
import { useState } from 'react';

const Skills = () => {

     const dispatch = useDispatch();

     //eslint-disable-next-line
     const [ t, i18n ] = useTranslation();
     const language = i18n.language;

     const [ skills, setSkills ] = useState<SkillGroupData[]>([]);
 
     useEffect(() => {
          skillsService()
               .listMySkills(language, dispatch)
               .then((e:any) => {
                    const newSkills:SkillGroupData[] = e?.data;
                    if (newSkills) {
                         setSkills(newSkills)
                    }
                })
     }, [language, dispatch])


     function renderSubItens(skills: SkillData[]): React.ReactNode {
          return (
               skills &&
               skills.map(_skill => (
                    <Skill key={_skill.name} {..._skill}/>
               ))
          ) || null;
     }

     function renderItens(skills: SkillGroupData[]): React.ReactNode {
          return (
               skills &&
               skills.map(_skill => {
                    const { name, skills } = _skill;
                    return (
                         <SkillGroup key={name} name={name}>
                              {renderSubItens(skills)}
                         </SkillGroup>
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




