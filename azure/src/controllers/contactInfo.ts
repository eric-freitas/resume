
import config from '../utils/config';
import { ContactInfo } from "../models/contactInfo";

import Db from '../db/controllers/contactInfo';


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
}

export default ContactInfoController;


