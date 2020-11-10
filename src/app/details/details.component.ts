import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() moreQuote: Quotes;
  @Output() removeQuote = new EventEmitter<boolean>();

  deleteQuote(remove: boolean){
    this.removeQuote.emit(remove);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
