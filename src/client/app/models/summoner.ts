import { Rank } from './rank';

export interface Summoner {
    id: number;
    name: string;
    revisionDate: number;
    profileIconId: number;
    level: number;
    ranks: Rank[];
}
