import { EducationItem } from "../../models/education";
import { connect } from '../elasticConn';

/**
 * education info database operation - using elastic
 *
 * @class DbEducation
 */
class DbEducation {
    
    /**
     * serializes raw db data into data to be rendered
     *
     * @private
     * @param {*} data - raw data
     * @return {*}  {EducationItem} - an object containing education info detail
     * @memberof DbEducation
     */
    private serialize(data: any): EducationItem {
        const { lang, detail, conclusion, institution, title } = data;

        return {
           conclusion   : String(conclusion),
           institution  : String(institution),
           title        : String(title),
           detail       : (detail && String(detail)) || undefined
        };

    }

    /**
     * lists education info from db
     *
     * @param {string} lang - language to filter
     * @return {*}  {(Promise<EducationItem[] | null>)} - a list of education info data
     * @memberof DbEducation
     */
    async list(lang: string): Promise<EducationItem[] | null>  {

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