
/**
 * exports http error
 *
 * @export
 * @param {*} e
 * @return {*}  {*}
 */
export function exportError(e: any): any {
    let err: any;
    if (e) {
        err = e.message || e.msg || e;
    } else {
        err = "unknown";
    }

    return  { err };
}
