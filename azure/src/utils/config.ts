const config_data = () => {

    if (!process.env.PG_CONN || !process.env.ELASTIC_CONN || !process.env.MONGO_CONN) {
        const config = require('../../local.settings.json')
        process.env = Object.assign(process.env, {...config.Values});
    }

    return {
        port                : parseInt( process.env.PORT ) || 3333,
        secretToken         : process.env.SECRET_TOKEN     || "naquelas",
        defaultLanguage     : process.env.DEF_LANG         || "pt",
        pgConn              : process.env.PG_CONN && JSON.parse(process.env.PG_CONN) || {}, 
        elasticConn         : process.env.ELASTIC_CONN && JSON.parse(process.env.ELASTIC_CONN) || {}, 
        mongoConn           : process.env.MONGO_CONN       || ""
    }
};

export default config_data();