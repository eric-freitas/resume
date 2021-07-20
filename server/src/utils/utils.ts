import safeStringify from "fast-safe-stringify";

export function randomInt(low: number, high: number): number {
    return Math.floor(Math.random() * (high-low + 1) + low);
}

export function numberToReal (numero: number) {
    let val = numero.toFixed(2).split('.');
    val[0]  = val[0].split(/(?=(?:...)*$)/).join('.');
    return val.join(',');
}

export function getStopwatch(){
    let startTime = process.hrtime();
    return {
        start() { 
            startTime = process.hrtime();
        },
        stop()  { 
            const diff = process.hrtime(startTime);
            const latency = diff[0] * 1e3 + diff[1] * 1e-6;
            return latency.toFixed(0);
        }
    };
}

export function getRandomNumber (min: number, max: number)  {
    if (min === undefined || max === undefined) {
        throw Error("Missing parameters");
    }
    if (min > max) {
        throw Error("Max must be greater than min");
    }
    return min + ((Math.random() * 1000000) % (max - min + 1));
}

export function getRandomString (size: number) {
    const asciiA = "a".charCodeAt(0);
    const asciiZ = "z".charCodeAt(0);
    let chars:any = [];
    for (let i = 0; i < size; i++) {
        chars[i] = String.fromCharCode(getRandomNumber(asciiA, asciiZ)); 
    }
    return chars.join("");
}

export function promisify (obj:any, methods:any) {
    const nativePromisify = require("util").promisify;
    methods.forEach((method:any) => {
        obj[method + "Async"] = nativePromisify(obj[method]); 
    });
}

export function isObjEmpty (obj: any) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

export function pick (obj: any, props: any) {
	const picked = {} as any;
	props.forEach((prop:any) => {
		picked[prop] = obj[prop];
	});
	return picked;
}

export function cookieParser(cookieString: string) {
    if (!cookieString) {
        return {};
    }
    const cookies = {} as any;
    const cookiePairs = cookieString.split("; ");
    cookiePairs.forEach(pair => {
        const parts = pair.split("=");
        cookies[parts[0]] = parts[1]
    });
    return cookies;
}

export const getHideSensitiveDataFunction = (blacklist: string[]) => (obj:any) => {
    const str = safeStringify(obj, (key, value) => {
        if (blacklist.includes(key)) {
            return "******";
        } else { 
            return value;
        }
    });
    return JSON.parse(str);
}

export function convertPropertiesToString (obj: any)  {
    Object.keys(obj).forEach(key => {
      typeof obj[key] === "object" ? convertPropertiesToString(obj[key]) : obj[key] = String(obj[key]);
    });
    return obj;
}

export function appendLeadingZeroes(n:number){
    if(n <= 9){
      return "0" + n;
    }
    return n
}

export function getShortDateString (date: Date) {
    return `${appendLeadingZeroes(date.getDate())}/${appendLeadingZeroes(date.getMonth() +1 )}/${date.getFullYear()}`;
}

export function formatCurrency (val: string) {
    let float_val = parseFloat(val) || 0;
    let cur_val = numberToReal( float_val );
    let cur_val_parts = cur_val.split(',');
    let int_part = cur_val_parts[0] || "0";
    let dec_part = cur_val_parts[1] || "00";
    return `<span class="currency"><span class="cur--sign">R$</span><span class="cur--val">${int_part}</span><small class="cur--decimals">,${dec_part}</small></span>`;
}

export function formatTime(val:Date, withSeconds?: boolean) {
    let res = `${val.getHours().toString().padStart(2, "0")}:${val.getMinutes().toString().padStart(2, "0")}`
    if (withSeconds) {
        res = `${res}:${val.getSeconds().toString().padStart(2, "0")}`;
    }
    return res;
}

export function  formatCurrencyOnlyValue (val: string)  {
    let float_val = parseFloat(val) || 0;
    let cur_val = numberToReal( float_val );
    let cur_val_parts = cur_val.split(',');
    let int_part = cur_val_parts[0] || "0";
    let dec_part = cur_val_parts[1] || "00";
    return `${int_part},${dec_part}`;
}

export function ciStringCompare(a: string, b: string): boolean {
    return typeof a === 'string' && typeof b === 'string'
    ? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
    : a === b;
}

export function trimNulls(data: any) {
    let y:any;
    for (var x in data) {
      y = data[x];
      if (y === null || typeof y === "undefined" || (y instanceof Object && Object.keys(y).length == 0)) {
        delete data[x];
      }
      if (y instanceof Object) y = trimNulls(y);
    }
    return data;
  }