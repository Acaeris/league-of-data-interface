import { Rank } from './rank';

export interface Summoner {
    id: number;
    accountId: number;
    name: string;
    revisionDate: number;
    profileIconId: number;
    level: number;
    region: string;
    ranks: Rank[];
}
