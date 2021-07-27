import * as mongoose from 'mongoose';

import config       from '../utils/config';

/**
 * method for mongodb connection
 *
 * @export
 * @return {*} 
 */
export async function connect() {
    return await mongoose.connect(config.mongoConn, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology : true
    });
}