import {
    Component, ChangeDetectionStrategy, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter
} from '@angular/core';
import { SelectorItem } from '../../models/selector-item';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'sui-selector',
    templateUrl: 'sui-selector.component.html'
})
export class SuiSelectorComponent implements AfterViewInit {
    @Input() class: string;
    @Input() title: string;
    @Input() icon: string;
    @Input() items: Array<{}>;
    @Input() options: {} = {};
    @Output() onChange: EventEmitter<SelectorItem> = new EventEmitter<SelectorItem>();
    @ViewChild('dropdown') dropdown: ElementRef;

    ngAfterViewInit(): void {
        const options: {} = Object.assign({
            onChange: (value: string|number, text: string|number, b: Array<HTMLElement>) => {
                var innerText: string = '';
                if (b !== null && b.length) {
                    innerText = b[0].innerText;
                }
                var item: SelectorItem = {value: value, text: text, innerText: innerText};
                this.onChange.emit(item);
            }
        }, this.options);

        jQuery(this.dropdown.nativeElement).dropdown(options);
    }
}
