export interface ExperienceAttributionData {
    text         : string,
    attribution? : ExperienceAttributionData[]
}

export interface ExperienceData {
    company      : string,
    position     : string,
    conclusion   : string,
    start        : string,
    detail?      : string,
    attribution? : ExperienceAttributionData[]
}