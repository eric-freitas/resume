import { Client } from '@elastic/elasticsearch';

import config from '../utils/config';

/**
 * method for elastic db connection
 *
 * @export
 * @return {*} 
 */
export async function connect() {

    return new Client(config.elasticConn);
}