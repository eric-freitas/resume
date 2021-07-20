import cls from 'cls-hooked';

import config                           from './config';
import { getHideSensitiveDataFunction } from "./utils";
import { winston_logger }               from "./winston-logger"

const { level, json, multiline, timestamp, colorize, hideSensitiveData } = config.logging;
const logger = winston_logger({ level, json, multiline, timestamp, colorize });


const CLS_NAMESPACE_NAME = "condomilson-logger";
const THREAD_ID_KEY      = "threadId";
const THREAD_ID_SIZE     = 6;
const EMPTY_THREAD_ID    = " ".repeat(THREAD_ID_SIZE);
const SENSITIVE_DATA     = ["password", "passwordHash", "token", "access_token", "image"];

const hideSensitiveAttributes = getHideSensitiveDataFunction(SENSITIVE_DATA);

export function startLog (label: string) {

    function logAsJsonHideSensitiveData(level: string, ...params:any[]) {
        const clsNamespace = cls.getNamespace(CLS_NAMESPACE_NAME);
        const threadId = (clsNamespace && clsNamespace.get(THREAD_ID_KEY)) || EMPTY_THREAD_ID;
        const logObj = { level, threadId, label, msg: params[1] };
        if (params[1]) {
            logger.log(level, { ...logObj, ...hideSensitiveAttributes(params[1]) });
        } else {
            logger.log(level, logObj);
        }
    }

    function logAsJsonClearData(level: string, ...params:any[]) {
        const clsNamespace = cls.getNamespace(CLS_NAMESPACE_NAME);
        const threadId = (clsNamespace && clsNamespace.get(THREAD_ID_KEY)) || EMPTY_THREAD_ID;
        const logObj = { level, threadId, label, msg: params[0] };
        if (params[1]) {
            logger.log(level, { ...logObj, ...params[2] });
        } else {
            logger.log(level, logObj);
        }
    }

    function logAsStringHideSensitiveData(level: string, ...params:any[]) {
        const clsNamespace = cls.getNamespace(CLS_NAMESPACE_NAME);
        const threadId = (clsNamespace && clsNamespace.get(THREAD_ID_KEY)) || EMPTY_THREAD_ID;
        if (params[1]) {
            logger.log(level, `(${threadId}) [${label}] ${params[0]}\n${JSON.stringify(hideSensitiveAttributes(params[1]), null, '    ')}`);
        } else {
            logger.log(level, `(${threadId}) [${label}] ${params[0]}`);
        }
    }

    function logAsStringClearData(level: string, ...params:any[]) {
        const clsNamespace = cls.getNamespace(CLS_NAMESPACE_NAME);
        const threadId = ( clsNamespace && clsNamespace.get(THREAD_ID_KEY)) || EMPTY_THREAD_ID;
        if (params[1]) {
            logger.log(level, `(${threadId}) [${label}] ${params[0]}\n${JSON.stringify( params[1], null, '   ')}`,);
        } else {
            logger.log(level, `(${threadId}) [${label}] ${params[0]}`);
        }
    }

    const getLogFunction = () => {
        if (json) {
            return hideSensitiveData ? logAsJsonHideSensitiveData   : logAsJsonClearData;
        } else {
            return hideSensitiveData ? logAsStringHideSensitiveData : logAsStringClearData;
        }
    }

    const runThread = (afunction: any) => {
        const clsNamespace = cls.getNamespace(CLS_NAMESPACE_NAME);
        if (clsNamespace) {
            clsNamespace.run(afunction);
        } else {
            afunction();
        }
    }

    const setThreadId = (threadId: any) => {
        const clsNamespace = cls.getNamespace(CLS_NAMESPACE_NAME);
        if (clsNamespace) {
            try {
                clsNamespace.set(THREAD_ID_KEY, threadId);
            } catch (err) {
                console.warn(`[WARN] Unable to set threadId: ${err.message}`);
            }
        }
    }

    const getThreadId = () => {
        const clsNamespace = cls.getNamespace(CLS_NAMESPACE_NAME);
        return clsNamespace && clsNamespace.get(THREAD_ID_KEY);
    }

    cls.createNamespace(CLS_NAMESPACE_NAME);

    const log = getLogFunction();

    return {
        debug:   (...params:any[]) => log("debug",   ...params),
        verbose: (...params:any[]) => log("verbose", ...params),
        info:    (...params:any[]) => log("info",    ...params),
        warn:    (...params:any[]) => log("warn",    ...params),
        error:   (...params:any[]) => log("error",   ...params),
        setThreadId,
        getThreadId,
        runThread
    };
};