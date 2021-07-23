export interface Skill {
    name        : string,
    level       : number,
    maxLevel    : number,
    text?       : string
}

export interface SkillGroup {
    title   : string
    name    : string,
    skills  : Skill[]
}