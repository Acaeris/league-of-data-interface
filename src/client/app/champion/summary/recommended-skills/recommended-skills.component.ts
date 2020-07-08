import { Component, Input } from '@angular/core';
import { Spell } from '../../../models/spell';
import { SkillBuild } from '../../../models/skill-build';

/**
 * This class represents the Champion Summary component
 */
@Component({
  moduleId: module.id,
  selector: 'recommended-skills',
  templateUrl: 'recommended-skills.component.html',
  styleUrls: ['recommended-skills.component.css']
})
export class RecommendedSkillsComponent {
  @Input() skillBuilds: SkillBuild[];
  @Input() spells: Spell[];
}
