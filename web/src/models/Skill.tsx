export interface SkillData {
    name        : string,
    level       : number,
    maxLevel    : number,
    text?       : string
}

export interface SkillGroupData {
    name    : string,
    title   : string,
    skills  : SkillData[]
}