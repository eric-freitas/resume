import React  from 'react';
import { useTranslation } from 'react-i18next';
import EducationItem from '../../../components/EducationItem';
import EducationSection from '../EducationSection';

import './education.scss'

const Education = () => {

    const { t } = useTranslation();

    return (
        <EducationSection name={t('experience.education')}>
            <EducationItem
                title       = "Bacharelado em **Ciências da Computação**"
                conclusion  = "2004"
                institution = "Uninove"
            />
            <EducationItem
                title       = "Iniciação Científica"
                conclusion  = "2003"
                institution = "Uninove"
                detail      = "Acionamento de dispositivos externos ao computador utilizando reconhecimento de voz."
            />
        </EducationSection>
        
    )
}

export default Education;