import { Model, Document } from 'mongoose';
import * as mongoose from 'mongoose'
import { SkillGroup, Skill } from '../../models/skill';

import { connect } from '../mongoConn';

interface ISkillItem extends Document {
    name    : string,
    level   : number,
    maxLevel: number,
    text?   : string
}

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

class DbSkills {

    private serialize(data: ISkill): SkillGroup {
        const { name, title, itens } = data;

        return {
            name   : String(name),
            title  : String(title),
            skills : itens.map(skill => this.serializeSkill(skill))
        };

    }
    serializeSkill(data: ISkillItem): Skill {
        const { name, level, maxLevel, text } = data;
        return {
            name    : String(name),
            level   : level,
            maxLevel: maxLevel,
            text    : (text && String(text) || undefined)
        }
    }

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