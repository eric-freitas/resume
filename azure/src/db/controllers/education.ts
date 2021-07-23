import { EducationItem } from "../../models/education";

import { connect } from '../elasticConn';

class DbEducation {
    
    private serialize(data: any): EducationItem {
        const { lang, detail, conclusion, institution, title } = data;

        return {
           conclusion   : String(conclusion),
           institution  : String(institution),
           title        : String(title),
           detail       : (detail && String(detail)) || undefined
        };

    }

    async  list(lang: string): Promise<EducationItem[] | null>  {

       const client = await connect();

        const { body }  = await client.search({
            index: 'education',
            body: {
              query: {
                match: { lang: lang }
              }
            }
          })
          
        if (body) {
            const rawResult = body?.hits?.hits;

            if (rawResult) {
                return rawResult.map(e => this.serialize(e?._source || {}));
            }
            
        }

        return null;

    }

   
}

export default DbEducation;