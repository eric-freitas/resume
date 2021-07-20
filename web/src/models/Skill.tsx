export interface Skill {
    name        : string,
    level       : number,
    maxLevel    : number,
    text?       : string
}

export interface SkillGroup {
    name    : string,
    skills  : Skill[]
}