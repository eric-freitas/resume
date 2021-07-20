import winston, { Logger } from "winston";
import { format } from "logform";

export interface LogConfig {
    level     : string,
    json      : boolean,
    multiline : boolean,
    timestamp : boolean,
    colorize  : boolean
}

const TIMESTAMP_FORMAT = "YYYY-MM-DD HH:mm:ss.SSS";

const formatLogLine = (formatLevel:any, showTimestamp:boolean) => (info:any) => {
    return `${showTimestamp ? info.timestamp + " " : ""}${formatLevel(info.level)} ${info.message}`;
};

const formatColorizedLevel = (level:string) => level.padEnd(17);

const formatNonColorizedLevel = (level:string) => level.padEnd(7);

const colorizedFormat = (includeTimestamp:boolean) => format.combine(
    format.colorize({ all: true }),
    format.timestamp({ format: TIMESTAMP_FORMAT }),
    format.printf(formatLogLine(formatColorizedLevel, includeTimestamp)));

const noColorFormat = (includeTimestamp:boolean) => format.combine(
    format.timestamp({ format: TIMESTAMP_FORMAT }),
    format.printf(formatLogLine(formatNonColorizedLevel, includeTimestamp)));

const getFormat = (data:LogConfig) => {
    const { json, multiline, timestamp, colorize } = data;
    if (json) {
        if (timestamp) {
            return format.combine(
                format.timestamp({ format: TIMESTAMP_FORMAT }),
                multiline ? format.json({ space: 4 }) : format.json()
            );
        } else {
            return multiline ? format.json({ space: 4 }) : format.json();
        }
    } else {
        return colorize ? colorizedFormat(timestamp) : noColorFormat(timestamp);
    }
}


let winstonLogger : Logger;
let logger        : any;

const log = (level:string, ...params:any[]) => {
    try {
        winstonLogger.log(level, params[0], ...params);
    } catch (err) {
        console.error(`Error logging using Winston: "${err.message}". Falling back to console: (${level})`, ...params);
    }
}

const getLogger = (data: LogConfig) => {
    winstonLogger = winston.createLogger({ level: data.level });
    winstonLogger.add(new winston.transports.Console({
        format: getFormat(data),
        stderrLevels: ["error"]
    }));

    return {
        log
    }
}

export function winston_logger (config:LogConfig)  {
    if (!logger) {
        logger = getLogger(config);
    } 
    return logger;
}
