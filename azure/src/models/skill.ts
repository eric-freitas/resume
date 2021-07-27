/**
 * skill info object
 *
 * @export
 * @interface Skill
 */
export interface Skill {
    /**
     * name of the skill
     *
     * @type {string}
     * @memberof Skill
     */
    name        : string,
    /**
     * level of this skill
     *
     * @type {number}
     * @memberof Skill
     */
    level       : number,
    /**
     * max obtainable level of this skill
     *
     * @type {number}
     * @memberof Skill
     */
    maxLevel    : number,
    /**
     * an optional label for this skill
     *
     * @type {string}
     * @memberof Skill
     */
    text?       : string
}

/**
 * an object grouping skills
 *
 * @export
 * @interface SkillGroup
 */
export interface SkillGroup {
    /**
     * title of this group
     *
     * @type {string}
     * @memberof SkillGroup
     */
    title   : string
    /**
     * name of this group - to be rendered
     *
     * @type {string}
     * @memberof SkillGroup
     */
    name    : string,
    /**
     * list of skills within this group
     *
     * @type {Skill[]}
     * @memberof SkillGroup
     */
    skills  : Skill[]
}