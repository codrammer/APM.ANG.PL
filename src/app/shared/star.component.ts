import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'apm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']   
})
export class StarComponent implements OnChanges {
    @Input() rating:number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter(); 

    ngOnChanges(): void {
        console.log("called ngChanges ", this.rating);
        this.starWidth = this.rating * 75 / 5;
        console.log(this.starWidth);
    }

    onClick(): void {
        this.ratingClicked.emit(`Rating ${this.rating} is clicked!`);
    }
}