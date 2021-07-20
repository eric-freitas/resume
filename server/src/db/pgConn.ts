import { Pool, PoolClient } from 'pg';

import config       from '../utils/config';
import { startLog } from '../utils/logger';

const logger = startLog("postgres-conn");

const pgConn = config.pgConn;

if (!pgConn)  {
    throw new Error("pgConn not defined. check env and config files.");
}

export const pool = new Pool(pgConn);
let poolOk = true;

pool.on('connect', client => {
    client.query(`set search_path to '${schema}'`);
    logger.info("Client connected. ");

});

pool.on('acquire', client => {
    logger.info("Client acquired. ");
});

pool.on('remove', client => {
    logger.info("Client removed. ");
});

pool.on('error', (err, client) => {
    logger.error("Error", { err });
}) ;

export const schema = pgConn.schema || "resume";

export async function runTransaction (transaction: (c:PoolClient) => Promise<any|null>): Promise<any|null> {
    const client = await pool.connect();
    let res = null;
    try {
        await client.query('BEGIN');
        res = await transaction(client);
        await client.query ('COMMIT');
    } catch (er) {
        logger.error("transaction error", {...er});
        await client.query('ROLLBACK');
        throw new Error (er.message || er);
    } finally {
        client.release();
    }
    return res;
}

export async function stop () {
    if (poolOk) {
        await pool.end();
        poolOk = false;
    } 
}

export function logTransaction (title: string, text: string, result: any)  {
    const { _parsers, _types, ...dados } = result;
    logger.info(title, { text, dados });
}

