
import { SkillGroup } from "../models/skill";
import config from '../utils/config';

import Db from '../db/controllers/skills';

/**
 * wraps skill info retrieval methods
 *
 * @class SkillController
 */
class SkillController {

    db = new Db();

    /**
     * lists skill info data
     *
     * @param {string} lang - language to filter
     * @return {*}  {(Promise<SkillGroup[]|null>)} - list of skill info data
     * @memberof SkillController
     */
    async list(lang: string): Promise<SkillGroup[]|null> {

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

export default SkillController;


