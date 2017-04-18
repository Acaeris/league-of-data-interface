import { Resource } from './resource';

export interface Spell {
  id: number,
  name: string,
  key: string,
  file: string,
  description: string,
  tooltip: string,
  cooldown: number[],
  range: number[],
  resource: Resource
}
