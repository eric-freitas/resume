export interface ExperienceAttribution {
    text         : string,
    attribution? : ExperienceAttribution[]
}

export interface Experience {
    company      : string,
    position     : string,
    conclusion   : string,
    start        : string,
    detail?      : string,
    attribution? : ExperienceAttribution[]
}