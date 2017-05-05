import { ChampionStats } from './champion-stats';
import { Stat } from './stat';
import { Rating } from './rating';
import { Spell } from './spell';
import { Combo } from './combo';

export interface Champion {
    iD: number,
    name: string,
    title: string,
    version: string,
    imageName: string,
    stats: ChampionStats,
    tags: string[],
    tagsAsString: string,
    resourceType: string,
    region: string,
    playStats: Stat[],
    rating: Rating,
    passive: Spell,
    spells: Spell[],
    combos: Combo[]
}
