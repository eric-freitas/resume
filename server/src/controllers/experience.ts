
import { startLog }       from "../utils/logger";
import config from '../utils/config';
import { Experience } from "../models/experience";

import Db from '../db/controllers/experience';

const logger = startLog("experience-controller");

class ExperienceController {

    db = new Db();

    async list(lang: string): Promise<Experience[]|null> {

        let result = await this.db.list(lang);
        if (!result || !result.length) {
            result = await this.db.list(config.defaultLanguage);
        }

        if (result && result.length) {
            return result;
        } else {
            return null;
        }

        /*return [
            {
                company     : "Olos",
                position    : "Desenvolvimento",
                conclusion  : "Hoje",
                start       : "2010",
                detail      : "Desenvolvimento, em .NET, dos módulos que compõem a plataforma Olos, que compreende discador, gravador, DAC e diversas ferramentas para Call Center.",
                attribution : [
                    {
                        text: "Responsável pelo desenvolvimento e implementação de atualizações e novas funcionalidades ao core do sistema Olos, utilizando linguagem C# e Node.JS para o back-end e JavaScript, incluindo frameworks JQuery, Bootstrap e React para o front-end. Entre os principais projetos, destacam-se:",
                        attribution: [
                            {  text: "Plataforma OlosChannel, integrando todos os canais disponíveis no Olos em uma única jornada fluída para o cliente" },
                            {  text: "Suporte ao PostgreSQL" },
                            {  text: "Sistema de gerenciamento dos Agentes Virtuais" },
                            {  text: "Chat e E-Mail como canal para contato com os clientes" },
                            {  text: "Desenvolvimento do módulo de IVR do Olos" }
                        ]
                    }
                ]
                
            },
        ];*/
    };

}

export default ExperienceController;


