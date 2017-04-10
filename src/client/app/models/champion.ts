import { Stat } from './stat';
import { Rating } from './rating';
import { Combo } from './combo';

export interface Champion {
    id: number,
    name: string,
    title: string,
    tags: string[],
    stats: Stat[],
    rating: Rating,
    combos: Combo[],
    version: string
}
