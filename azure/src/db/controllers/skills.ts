import { Model, Document } from 'mongoose';
import * as mongoose from 'mongoose'
import { SkillGroup, Skill } from '../../models/skill';

import { connect } from '../mongoConn';

/**
 * interface for mongoose data retrieval, mirroring mongodb documents, inner skill items property
 *
 * @interface ISkillItem
 * @extends {Document}
 */
interface ISkillItem extends Document {
    name    : string,
    level   : number,
    maxLevel: number,
    text?   : string
}

/**
 * interface for mongoose data retrieval, mirroring mongodb skill documents.
 *
 * @interface ISkill
 * @extends {Document}
 */
interface ISkill extends Document {
    lang    : string,
    name    : string,
    title   : string,
    itens   : ISkillItem[]
}

const SkillSchema = new mongoose.Schema({
    lang    : String,
    name    : String,
    title   : String,
    itens   : [
        { 
            name        : String,
            level       : Number,
            maxLevel    : Number,
            text        : {
                type        : String,
                required    : false
            }
        }
    ]
});

const MongoSkill: Model<ISkill> = mongoose.model('skills', SkillSchema);

/**
 * skill info database operations - using mongoDb
 *
 * @class DbSkills
 */
class DbSkills {

    /**
     * serializes raw data into data to be rendered
     *
     * @private
     * @param {ISkill} data - raw skill data
     * @return {*}  {SkillGroup} - an object containing a skill group complete data
     * @memberof DbSkills
     */
    private serialize(data: ISkill): SkillGroup {
        const { name, title, itens } = data;

        return {
            name   : String(name),
            title  : String(title),
            skills : itens.map(skill => this.serializeSkill(skill))
        };

    }

    /**
     * serializes a single skill item into data to be rendered
     *
     * @param {ISkillItem} data - raw data
     * @return {*}  {Skill} - an object containing a skill info data
     * @memberof DbSkills
     */
    serializeSkill(data: ISkillItem): Skill {
        const { name, level, maxLevel, text } = data;
        return {
            name    : String(name),
            level   : level,
            maxLevel: maxLevel,
            text    : (text && String(text) || undefined)
        }
    }

    /**
     * lists skill data from db
     *
     * @param {string} lang - language to filter
     * @return {*}  {Promise<SkillGroup[]>} - a list of skill group objects
     * @memberof DbSkills
     */
    async list (lang: string) : Promise<SkillGroup[]> {
        connect();
        try {
            const result : ISkill[] = await MongoSkill.find({lang: lang});

            if (result && result.length) {
                return result.map(_r => this.serialize(_r));
            } else {
                return [];
            }
        }
        finally {
            mongoose.connection.close();
        }
    }
}

export default DbSkills;