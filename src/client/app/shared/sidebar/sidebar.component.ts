import { Component, ElementRef, AfterContentChecked, HostBinding } from '@angular/core';

/**
 * This class represents the sidebar component.
 */
@Component({
  moduleId: module.id,
  selector: 'ui-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements AfterContentChecked {
  @HostBinding('class') cssClass = 'ui vertical sidebar menu';

  constructor(private el: ElementRef) { }

  ngAfterContentChecked() {
    $(this.el.nativeElement).sidebar('attach events', '.toc.item');
  }
}
