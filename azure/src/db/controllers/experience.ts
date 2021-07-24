import { Model, Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Experience, ExperienceAttribution } from '../../models/experience';

import { connect } from '../mongoConn';

interface IExperience {
    lang        : string,
    company     : string,
    position    : string,
    conclusion  : string,
    start       : string,
    detail      : string,
    attribution?: any[]
}

const ExperienceSchema = new Schema(
    {
        lang        : String,
        company     : String,
        position    : String,
        conclusion  : String,
        start       : String,
        detail      : String,
        attribution : [Schema.Types.Mixed]
    }, 
    { 
        strict: false 
    }
);

const MongoExperience:Model<IExperience>  = mongoose.model('Experience', ExperienceSchema, 'experience');


class DbExperience {

    private serializeAttribution(data: any): ExperienceAttribution {
        const { text, attribution } = data;
        return {
            text        :  String(text),
            attribution : (attribution && attribution.map(e => this.serializeAttribution(e))) || undefined
        }
    }

    private serialize(data: IExperience): Experience {
        const { lang, company, position, conclusion, start, detail, attribution } = data;

        return {
            company     : String(company),
            conclusion  : String(conclusion),
            position    : String(position),
            start       : String(start),
            detail      : (detail && String(detail)) || undefined,
            attribution : (attribution && attribution.map(e => this.serializeAttribution(e))) || undefined
        };

    }
   

    async list (lang: string) : Promise<Experience[]> {
        connect();
        try {
            const result:IExperience[] = await MongoExperience.find({lang: lang}).sort({conclusion: -1});

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

export default DbExperience;