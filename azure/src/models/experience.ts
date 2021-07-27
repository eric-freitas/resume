/**
 * job experience attribution object
 *
 * @export
 * @interface ExperienceAttribution
 */
export interface ExperienceAttribution {
    /**
     * text to be rendered
     *
     * @type {string}
     * @memberof ExperienceAttribution
     */
    text         : string,
    /**
     * other attributions derived from this one
     *
     * @type {ExperienceAttribution[]}
     * @memberof ExperienceAttribution
     */
    attribution? : ExperienceAttribution[]
}

/**
 * job experience object
 *
 * @export
 * @interface Experience
 */
export interface Experience {
    /**
     * company of this job experience
     *
     * @type {string}
     * @memberof Experience
     */
    company      : string,
    /**
     * position held in this period
     *
     * @type {string}
     * @memberof Experience
     */
    position     : string,
    /**
     * end of this job
     *
     * @type {string}
     * @memberof Experience
     */
    conclusion   : string,
    /**
     * start of this job
     *
     * @type {string}
     * @memberof Experience
     */
    start        : string,
    /**
     * details
     *
     * @type {string}
     * @memberof Experience
     */
    detail?      : string,
    /**
     * list of attributions of this job
     *
     * @type {ExperienceAttribution[]}
     * @memberof Experience
     */
    attribution? : ExperienceAttribution[]
}