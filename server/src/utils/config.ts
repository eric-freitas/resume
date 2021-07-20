import dotenv from 'dotenv-flow';

import * as raw_config_file from '../config.json';

dotenv.config();

const config_file     = <any>raw_config_file;
const config_defaults = config_file.defaults || {};

let config_data = {
    port                : parseInt( process.env.PORT              || config_file.port          ) || 3333,
    securePort          : process.env.SECURE_PORT                 || config_file.securePort      || 8443,
    secretToken         : process.env.SECRET_TOKEN                || config_file.secretToken     || "naquelas",
    defaultLanguage     : process.env.DEF_LANG                    || config_file.defLang         || "pt",
    defaults: {
    },
    tempDir             : process.env.TEMP_DIR                    || config_file.tempDir         || "C:\\Todo\\temp\\",
    allowedOrigins      : config_file.allowedOrigins              || ["http://localhost:3333", "http://191.252.120.78:8091" ],
    tolerance           : process.env.TOLERANCE                   || config_file.tolerance       || 1,
    logging             : config_file.logging,
    
    pgConn              : process.env.PG_CONN && 
                          JSON.parse(process.env.PG_CONN)         || config_file.pgConn,

    elasticConn         : process.env.ELASTIC_CONN && 
                          JSON.parse(process.env.ELASTIC_CONN)    || config_file.elasticConn,
    
    mongoConn           : process.env.MONGO_CONN                  || config_file.mongoConn,
    google : {
        callback        : process.env.GOOGLE_CALLBACK             || config_file.googleCallback  || 'http://localhost:333',
        clientId        : process.env.GOOGLE_CLIENTID             || config_file.googleClientId  || "",
        clientSecret    : process.env.GOOGLE_SECRET               || config_file.googleSecret    || ""
    }
};

export default config_data;