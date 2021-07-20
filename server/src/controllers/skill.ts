
import { Skill, SkillGroup } from "../models/skill";
import { startLog }       from "../utils/logger";
import config from '../utils/config';

const logger = startLog("skill-controller");

class SkillController {

    async list(lang: string): Promise<SkillGroup[]> {
        return [
            {
                name: "Idiomas",
                skills : [
                    {   
                        name    : "Português",
                        level   : 5,
                        maxLevel: 5,
                        text    : "Nativo"
                    },{   
                        name    : "Inglês",
                        level   : 4,
                        maxLevel: 5,
                        text    : "Fluente"
                    },{   
                        name    : "Espanhol",
                        level   : 4,
                        maxLevel: 5,
                        text    : "Fluente"
                    },{   
                        name    : "Italiano",
                        level   : 4,
                        maxLevel: 5,
                        text    : "Fluente"
                    },{   
                        name    : "Francês",
                        level   : 3,
                        maxLevel: 5,
                        text    : "Avançado"
                    }
                ]
            },{
                name: "Back-End",
                skills : [
                    {   
                        name    : "C# / MVC .Net Framework",
                        level   : 5,
                        maxLevel: 5
                    },{   
                        name    : "API Rest",
                        level   : 5,
                        maxLevel: 5
                    },{   
                        name    : "Node.js",
                        level   : 4,
                        maxLevel: 5
                    },{   
                        name    : "Typescript",
                        level   : 4,
                        maxLevel: 5
                    },{   
                        name    : "Jest",
                        level   : 3,
                        maxLevel: 5                        
                    }
                ]
            },{
                name: "Front-End",
                skills : [
                    {   
                        name    : "C# / Asp.Net",
                        level   : 5,
                        maxLevel: 5
                    },{   
                        name    : "React",
                        level   : 4,
                        maxLevel: 5
                    },{   
                        name    : "HTML5 / CSS3",
                        level   : 4,
                        maxLevel: 5
                    },{   
                        name    : "Sass",
                        level   : 4,
                        maxLevel: 5
                    },{   
                        name    : "jQuery",
                        level   : 4,
                        maxLevel: 5
                    },{   
                        name    : "Bootstrap",
                        level   : 3,
                        maxLevel: 5
                    },{   
                        name    : "Angular",
                        level   : 2,
                        maxLevel: 5
                    },{   
                        name    : "Handlebars",
                        level   : 2,
                        maxLevel: 5
                    },{   
                        name    : "Unity",
                        level   : 1,
                        maxLevel: 5
                    },{   
                        name    : "PHP",
                        level   : 1,
                        maxLevel: 5                        
                    }
                ]                
            },{
                name: "Banco de Dados",
                skills : [
                    {   
                        name    : "MS SQL",
                        level   : 5,
                        maxLevel: 5
                    },{   
                        name    : "PostgreSQL",
                        level   : 4,
                        maxLevel: 5
                    },{   
                        name    : "MongoDb",
                        level   : 2,
                        maxLevel: 5
                    },{   
                        name    : "Elastic",
                        level   : 2,
                        maxLevel: 5
                    },{   
                        name    : "Redis",
                        level   : 2,
                        maxLevel: 5
                    },{   
                        name    : "MySQL",
                        level   : 1,
                        maxLevel: 5
                    },{   
                        name    : "Oracle",
                        level   : 1,
                        maxLevel: 5
                    }
                ]
            },{
                name: "Sistemas Operacionais",
                skills : [
                    {   
                        name    : "MS Windows",
                        level   : 5,
                        maxLevel: 5
                    },{   
                        name    : "Linux - CentOS",
                        level   : 3,
                        maxLevel: 5
                    },{   
                        name    : "Unix - Solaris",
                        level   : 1,
                        maxLevel: 5
                    }
                ]
            },{
                name: "Outros",
                skills : [
                    {   
                        name    : "Comunicação TCP/IP",
                        level   : 5,
                        maxLevel: 5,
                        text    : "WebSocket, WebAPI, SignaR, .NET Remoting"
                    },{   
                        name    : "Regex",
                        level   : 5,
                        maxLevel: 5
                    },{   
                        name    : "VoIP",
                        level   : 3,
                        maxLevel: 5
                    },{   
                        name    : "Git Hub",
                        level   : 3,
                        maxLevel: 5
                    },{   
                        name    : "Arduino",
                        level   : 3,
                        maxLevel: 5
                    },{   
                        name    : "MediaWiki",
                        level   : 4,
                        maxLevel: 5
                    }
                ]
            }
        ]
    }

}

export default SkillController;


