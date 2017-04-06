import { Stat } from './stat';

export interface Champion {
    id: number;
    name: string;
    title: string;
    tags: string[];
    stats: Stat[];
    version: string;
}
