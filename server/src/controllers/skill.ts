
import { Skill } from "../models/skill";
import { startLog }       from "../utils/logger";
import config from '../utils/config';

const logger = startLog("skill-controller");

class SkillController {

    async list(lang: string): Promise<Skill[]> {
        return [{
            name: "x",
            level: 1,
            maxLevel: 2
        },{
            name: "x",
            level: 1,
            maxLevel: 2,
            text: "X"
        }];
    }

}

export default SkillController;


