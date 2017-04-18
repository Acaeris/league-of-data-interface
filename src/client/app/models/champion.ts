import { Stat } from './stat';
import { Rating } from './rating';
import { Combo } from './combo';
import { Spell } from './spell';

export interface Champion {
    id: number,
    name: string,
    title: string,
    tags: string[],
    stats: Stat[],
    rating: Rating,
    passive: Spell,
    spells: Spell[],
    combos: Combo[],
    version: string
}
