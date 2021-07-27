
import config from '../utils/config';
import { ContactInfo } from "../models/contactInfo";

import Db from '../db/controllers/contactInfo';

/**
 * wraps contact info retrieval methods
 *
 * @class ContactInfoController
 */
class ContactInfoController {
    
    db = new Db();

    /**
     * lists contact info data
     *
     * @param {string} lang - language to filter
     * @return {*}  {(Promise<ContactInfo[]|null>)} - a list of contact info data
     * @memberof ContactInfoController
     */
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


