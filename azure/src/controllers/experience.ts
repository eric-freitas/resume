
import config from '../utils/config';
import { Experience } from "../models/experience";

import Db from '../db/controllers/experience';

/**
 * wraps experience data retrieval methods
 *
 * @class ExperienceController
 */
class ExperienceController {

    db = new Db();

    /**
     * lists experience info data
     *
     * @param {string} lang - language to filter
     * @return {*}  {(Promise<Experience[]|null>)} - list of experience info data
     * @memberof ExperienceController
     */
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
    }

}

export default ExperienceController;


