import { Client } from '@elastic/elasticsearch';

import config from '../utils/config';

export async function connect() {

    return new Client(config.elasticConn);
}