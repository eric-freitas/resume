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

export interface SkillsProps {
     selected : boolean
}

const Skills: React.FC<SkillsProps> = (props) => {

     const { selected } = props;

     const dispatch = useDispatch();

     //eslint-disable-next-line
     const [ t, i18n ] = useTranslation();
     const language = i18n.language;

     const [ skills, setSkills ] = useState<SkillGroupData[]>([]);

     const className = `skills-section ${selected ? "--selected" : ""}`
 
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
                    const { name, title, skills } = _skill;
                    return (
                         <SkillGroup key={name} name={title}>
                              {renderSubItens(skills)}
                         </SkillGroup>
                    )
               })
          ) || null;
     }
     

     return (
          <section className={className}>
               {renderItens(skills)}
          </section>
     )
}

export default Skills;




