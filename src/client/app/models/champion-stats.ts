import { ChampionRegenStat } from './champion-regen-stat';
import { ChampionAttackStat } from './champion-attack-stat';
import { ChampionDefenseStat } from './champion-defense-stat';

export interface ChampionStats {
  iD: number,
  moveSpeed: number,
  health: ChampionRegenStat,
  resource: ChampionRegenStat,
  attack: ChampionAttackStat,
  armor: ChampionDefenseStat,
  magicResist: ChampionDefenseStat,
  version: string,
  region: string
}
