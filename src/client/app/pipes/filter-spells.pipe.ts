import { Pipe, PipeTransform } from '@angular/core';
import { Spell } from '../models/spell';

@Pipe({name: 'filterSpells'})
export class FilterSpellsPipe implements PipeTransform {
    transform(haystack: Spell[], needle: any): Spell {
        const filteredHaystack = haystack.filter((p: Spell) => p.key === needle);

        return filteredHaystack[0];
    }
}
