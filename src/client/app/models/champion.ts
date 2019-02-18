import { ChampionStats } from './champion-stats';
import { Spell } from './spell';
import { Combo } from './combo';
import { Rating } from './rating';
import { Stat } from './stat';

export interface Champion {
    id: number;
    name: string;
    imageName: string;
    title: string;
    tags: string[];
    resourceType: string;
    stats: ChampionStats;
    passive: Spell;
    spells: Spell[];
    combos: Combo[];
    playStats: Stat[];
    rating: Rating;
    version: string;
    region: string;
}
