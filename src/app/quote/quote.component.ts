import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotePublisher: string;
  quoteMessage: string;
  quoteAuthor: string;
  inputDate: Date;
  newMessage: any;

  newquote = [
    new Quotes(0, 'Josue', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Nelson Mandela', new Date())
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
