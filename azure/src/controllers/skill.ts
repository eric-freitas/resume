
import { SkillGroup } from "../models/skill";
import config from '../utils/config';

import Db from '../db/controllers/skills';


class SkillController {

    db = new Db();

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


