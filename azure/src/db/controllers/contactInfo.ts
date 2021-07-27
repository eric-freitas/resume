import { ContactInfo } from '../../models/contactInfo';
import { pool, schema } from '../pgConn';

/**
 * contact info database operation - using postgres
 *
 * @class DbContactInfo
 */
class DbContactInfo {
    
    /**
     * serializes raw db data into data to be rendered
     *
     * @private
     * @param {*} data - raw data
     * @return {*}  {ContactInfo} - an object containing contact info details
     * @memberof DbContactInfo
     */
    private serialize(data: any): ContactInfo {
        const { id_contact_info, id_icon, description, icon_lib, icon, hint, link_to, text } = data;

        return {
            hint    : String(hint),
            linkTo  : String (link_to),
            text    : String(text),
            icon    : {
                lib     : String(icon_lib),
                name    : String(icon)
            }
        };

    }

    /**
     * lists contact info from db
     *
     * @param {string} lang - language to filter
     * @return {*}  {Promise<ContactInfo[]>} - a list of contact info data
     * @memberof DbContactInfo
     */
    async list(lang: string): Promise<ContactInfo[]>  {
        const client = await pool.connect();
        try {
            let result = await client.query(`select 
                                                I.*,
                                                Ic.lib as icon_lib,
                                                Ic.name as icon,
                                                T.hint,
                                                T.link_to,
                                                T.text
                                            from
                                                ${schema}.contact_info I 
                                            inner join 
                                                ${schema}.contact_info_text T 
                                            on
                                                I.id_contact_info = T.id_contact_info
                                            inner join
                                                ${schema}.languages L
                                            on
                                                T.id_language = L.id_language
                                            inner join
                                                ${schema}.icons Ic
                                            on
                                                I.id_icon = Ic.id_icon
                                            WHERE
                                                L.code = $1
                                            ORDER BY
                                                I.id_contact_info;`, [ lang ]);
            if (result && result.rows) {
                return result.rows.map(row => this.serialize( row ));
            } else {
                return [];
            }
        }
        finally {
            await client.end();
        }
    }

   
}

export default DbContactInfo;