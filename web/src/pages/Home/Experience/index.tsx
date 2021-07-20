import React  from 'react';
import ExperienceItem from '../../../components/ExperienceItem';
import ExperienceSection from '../ExperienceSection';
import { useTranslation } from 'react-i18next';

import './experience.scss'
import Education from '../Education';

const Experience = () => {

    const { t } = useTranslation();

    return (
       <section className="experience-section">
            <Education/>
            
            <ExperienceSection name={t('experience.professional')}>
                <ExperienceItem
                    company     = "Olos"
                    position    = "Desenvolvimento"
                    conclusion  = {t('misc.today')}
                    start       = "2010"
                    attribution = {
                        [
                            {
                                text : "Desenvolvimento, em .NET, dos módulos que compõem a plataforma Olos, que compreende discador, gravador, DAC e diversas ferramentas para Call Center."
                            },
                            {
                                text: "Responsável pelo desenvolvimento e implementação de atualizações e novas funcionalidades ao core do sistema Olos, utilizando linguagem C# e Node.JS para o back-end e JavaScript, incluindo frameworks JQuery, Bootstrap e React para o front-end. Entre os principais projetos, destacam-se:",
                                subItens: [
                                    {  text: "Plataforma OlosChannel, integrando todos os canais disponíveis no Olos em uma única jornada fluída para o cliente" },
                                    {  text: "Suporte ao PostgreSQL" },
                                    {  text: "Sistema de gerenciamento dos Agentes Virtuais" },
                                    {  text: "Chat e E-Mail como canal para contato com os clientes" },
                                    {  text: "Desenvolvimento do módulo de IVR do Olos" }
                                ]
                            }
                        ]
                    }
                            
                />
            </ExperienceSection>
       </section>
    )
}

export default Experience;