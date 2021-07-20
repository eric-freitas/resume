import React, { useEffect, useState }  from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import educationService from '../../../services/education';

import { EducationData } from '../../../models/Education';

import EducationSection from '../EducationSection';
import EducationItem from '../../../components/EducationItem';


import './education.scss'

const Education = () => {

    const dispatch = useDispatch();
    const [ t, i18n ] = useTranslation();
    const language = i18n.language;

    const [ education, setEducation ] = useState<EducationData[]>([]);

    useEffect(() => {
        educationService()
             .listMyEducation(language, dispatch)
             .then((e:any) => {
                  const newEducation:EducationData[] = e?.data;
                  if (newEducation) {
                    setEducation(newEducation);
                  }
              })
    }, [language, dispatch])

    const itens = (
        education &&
        education.map(_edu => (<EducationItem key={_edu.title} {..._edu}/>))
    ) || null;

    return (
        <EducationSection name={t('experience.education')}>
            {itens}
        </EducationSection>
        
    )
}

export default Education;