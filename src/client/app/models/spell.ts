import { Resource } from './resource';
import { SpellVariable } from './spell-variable';

export interface Spell {
  name: string;
  key: string;
  image: string;
  maxRank: number;
  description: string;
  tooltip: string;
  cooldowns: number[];
  ranges: number[];
  effects: number[][];
  variables: SpellVariable[];
  resource: Resource;
}
