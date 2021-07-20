import React  from 'react';
import Skill from '../../../components/Skill';
import SkillGroup from '../SkillGroup';

import './skills.scss';

const Skills = () => {

    return (
       <section className="skills-section">
           <SkillGroup name="Idiomas" >
                <Skill name="Português" level={5} maxLevel={5} text="Nativo" />
                <Skill name="Inglês"    level={4} maxLevel={5} text="Fluente" />
                <Skill name="Espanhol"  level={4} maxLevel={5} text="Fluente" />
                <Skill name="Italiano"  level={4} maxLevel={5} text="Fluente" />
                <Skill name="Francês"   level={3} maxLevel={5} text="Avançado" />
           </SkillGroup>


           <SkillGroup name="Back-End" >
                <Skill name="C# / MVC" level={5} maxLevel={5} />
                <Skill name="C# / API Rest" level={5} maxLevel={5} />
                <Skill name="Node.js" level={4} maxLevel={5} />
                <Skill name="Node.js com Typescript" level={4} maxLevel={5} />
                <Skill name="C++" level={1} maxLevel={5} />
           </SkillGroup>

           <SkillGroup name="Front-End" >
                <Skill name="C# / Asp.Net" level={5} maxLevel={5} />
                <Skill name="React com Typescript" level={4} maxLevel={5} />
                <Skill name="React" level={3} maxLevel={5} />
                <Skill name="HTML5 / CSS3" level={4} maxLevel={5} />
                <Skill name="Sass" level={4} maxLevel={5} />
                <Skill name="JQuery" level={4} maxLevel={5} />
                <Skill name="Bootstrap" level={4} maxLevel={5} />
                <Skill name="Angular" level={3} maxLevel={5} />
                <Skill name="Handlebars" level={3} maxLevel={5} />
                <Skill name="Unity" level={1} maxLevel={5} />
           </SkillGroup>

           <SkillGroup name="Banco de Dados" >
                <Skill name="MS Sql" level={5} maxLevel={5} />
                <Skill name="PostgreSQL" level={4} maxLevel={5} />
                <Skill name="Redis" level={3}maxLevel={5} />
                <Skill name="MongoDB" level={3} maxLevel={5} />
                <Skill name="MySQL" level={2} maxLevel={5} />
                <Skill name="Oracle" level={1}maxLevel={5} />
           </SkillGroup>

           <SkillGroup name="Sistemas Operacionais" >
                <Skill name="MS Windows" level={5} maxLevel={5} />
                <Skill name="Linus - CentOS" level={3} maxLevel={5} />
                <Skill name="Unix - Solaris" level={1} maxLevel={5} />
           </SkillGroup>

           <SkillGroup name="Outros" >
                <Skill name="Comunicação TCP/IP" level={5} maxLevel={5} text="WebSocket, WebAPI, SignaR, .NET Remoting" />
                <Skill name="Regex" level={4} maxLevel={5} />
                <Skill name="VoIP" level={3} maxLevel={5} />
                <Skill name="Git Hub" level={3} maxLevel={5} />
                <Skill name="Arduino" level={3} maxLevel={5} />
                <Skill name="MediaWiki" level={5} maxLevel={5} />
           </SkillGroup>

       </section>
    )
}

export default Skills;