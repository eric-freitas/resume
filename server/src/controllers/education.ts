
import { startLog }       from "../utils/logger";
import config from '../utils/config';
import { EducationItem } from "../models/education";

const logger = startLog("education-controller");

class EducationController {

    async list(lang: string): Promise<EducationItem[]> {
        return [
            {
                title       : "Bacharelado em **Ciências da Computação**",
                conclusion  : "2004",
                institution : "Uninove"
            },{
                title       : "Iniciação Científica",
                conclusion  : "2003",
                institution : "Uninove",
                detail      : "Acionamento de dispositivos externos ao computador utilizando reconhecimento de voz."
            },
        ];
    };

}

export default EducationController;


