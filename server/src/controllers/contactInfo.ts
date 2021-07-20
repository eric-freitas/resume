
import { startLog }       from "../utils/logger";
import config from '../utils/config';
import { ContactInfo } from "../models/contactInfo";

import Db from '../db/controllers/contactInfo';

const logger = startLog("contact-info-controller");

class ContactInfoController {
    
    db = new Db();

    async list(lang: string): Promise<ContactInfo[]|null> {

        let result = await this.db.list(lang);
        if (!result || !result.length) {
            result = await this.db.list(config.defaultLanguage);
        }

        if (result && result.length) {
            return result;
        } else {
            return null;
        }
    };
        /*return [
            {  
                icon    : {
                    lib     : "fab",
                    name    : "linkedin"
                },
                text    : "eric-freitas-matos",
                linkTo  : "https://www.linkedin.com/in/eric-freitas-matos/",
                hint    : "LinkedIn"
            },{  
                icon    : {
                    lib     : "fas",
                    name    : "map-marker-alt"
                },
                text    : "Guarulhos - SP, Brasil",
                linkTo  : "https://www.google.com.br/maps/place/Guarulhos+-+SP",
                hint    : "Localização"
            },{  
                icon    : {
                    lib     : "fab",
                    name    : "github"
                },
                text    : "eric-freitas",
                linkTo  : "https://github.com/eric-freitas",
                hint    : "Git Hub"                
            },{  
                icon    : {
                    lib     : "fab",
                    name    : "facebook"
                },
                text    : "ericfmatos",
                linkTo  : "https://www.facebook.com/ericfmatos",
                hint    : "Facebook"
            },{  
                icon    : {
                    lib     : "fab",
                    name    : "instagram"
                },
                text    : "@eric_freitas_matos",
                linkTo  : "https://www.instagram.com/eric_freitas_matos/",
                hint    : "Instagram"
            }
        ];
    };*/

}

export default ContactInfoController;


