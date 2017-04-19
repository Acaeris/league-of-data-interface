import { Resource } from './resource';
import { SpellVariable } from './spell-variable';

export interface Spell {
  id: number,
  name: string,
  key: string,
  file: string,
  maxrank: number,
  description: string,
  tooltip: string,
  cooldown: number[],
  range: number[],
  effect: number[][],
  vars: SpellVariable[],
  resource: Resource
}
