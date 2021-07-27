/**
 * education info object
 *
 * @export
 * @interface EducationItem
 */
export interface EducationItem {
    /**
     * title or grade obtained
     *
     * @type {string}
     * @memberof EducationItem
     */
    title       : string,
    /**
     * attended institution
     *
     * @type {string}
     * @memberof EducationItem
     */
    institution : string,
    /**
     * year of conclusion
     *
     * @type {string}
     * @memberof EducationItem
     */
    conclusion  : string,
    /**
     * details
     *
     * @type {string}
     * @memberof EducationItem
     */
    detail?     : string
}