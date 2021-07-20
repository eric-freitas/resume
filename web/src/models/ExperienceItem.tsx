export interface ExperienceAttributionData {
    text      : string,
    subItens? : ExperienceAttributionData[]
}

export interface ExperienceItemData {
    company      : string,
    conclusion?  : string,
    start?       : string,
    position?    : string
    detail?      : string,
    attribution? : ExperienceAttributionData[]
}