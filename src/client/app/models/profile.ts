import { Rank } from './rank';

export interface Profile {
    id: number;
    name: string;
    revisionDate: number;
    profileIconId: number;
    summonerLevel: number;
    ranks: Rank[];
}
