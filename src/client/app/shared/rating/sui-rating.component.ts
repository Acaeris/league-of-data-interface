import {
    Component, Input, ViewChild, ChangeDetectionStrategy, AfterViewInit, ElementRef, EventEmitter, Output
} from '@angular/core';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'sui-rating',
    templateUrl: 'sui-rating.component.html'
})
export class SuiRatingComponent implements AfterViewInit {
    @Input() class: string;
    @Input() initialRating: number;
    @Input() maxRating: number;
    @Input() disabled: boolean;
    @Output() onRate:EventEmitter<number> = new EventEmitter<number>();
    @ViewChild('rating') rating: ElementRef;

    ngAfterViewInit(): void {
        jQuery(this.rating.nativeElement).rating({
            initialRating: this.initialRating || 0,
            maxRating: this.maxRating || 5,
            onRate: (value: number) => {
                this.onRate.emit(value);
            }
        });
        if (this.disabled) {
            jQuery(this.rating.nativeElement).rating('disable');
        }
    }
}
