import { ChampionStats } from './champion-stats';

export interface Champion {
    id: number,
    name: string,
    imageName: string,
    title: string,
    tags: string[],
    resourceType: string,
    stats: ChampionStats,
    version: string,
    region: string
}
