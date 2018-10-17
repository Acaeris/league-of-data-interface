import { Component, ElementRef, AfterContentChecked } from '@angular/core';

/**
 * This class represents the sidebar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ui-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  host: {'class': 'ui vertical sidebar menu'}
})
export class SidebarComponent implements AfterContentChecked {
  constructor(private el: ElementRef) { }

  ngAfterContentChecked() {
    $(this.el.nativeElement).sidebar('attach events', '.toc.item');
  }
}
