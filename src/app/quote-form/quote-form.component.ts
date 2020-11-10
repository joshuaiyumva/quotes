import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quotePublisher: string;
  quoteMessage: string;
  quoteAuthor: string;
  inputDate: Date;
  id:number;
  newMessage: any;

  newquote = [new Quotes(0, 'Josue', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Nelson Mandela', new Date(2020, 5, 12))];
  @Output() Quotes = new EventEmitter<Quotes>(); 

  submitMessage(){
    let quoteLength = this.newquote.length;
    this.id = quoteLength + 1;
    this.newMessage = new Quotes(0, this.quotePublisher, this.quoteMessage, this.quotePublisher, new Date());
    this.newquote.push(this.newMessage);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
