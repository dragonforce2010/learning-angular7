import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  private starEmptyness: boolean[]
  @Input()
  private rating: number = 0

  constructor() { }

  ngOnInit() {
    this.starEmptyness = []
    for (let i = 0; i <=5; i++) {
      this.starEmptyness.push(i > this.rating)
    }
  }

}
