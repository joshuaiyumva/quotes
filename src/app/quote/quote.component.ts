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
    new Quotes(0, 'Josue', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Nelson Mandela', new Date()),
    new Quotes(1,'Walt Disney', 'The way to get started is to quit talking and begin doing.', 'Eliane', new Date()),
    new Quotes(2,'Steve Jobs', 'Your time is limited, so do not waste it living someone else life. Do not be trapped by dogma – which is living with the results of other peoples thinking.', 'Emile', new Date()),
    new Quotes(3,'Oprah Winfrey', 'If you look at what you have in life, you will always have more.If you look at what you do not have in life, you will never have enough.', 'Emma', new Date()),
    new Quotes(4,'James Cameron', 'If you set your goals ridiculously high and it is a failure, you will fail above everyone else success.', 'Josue', new Date()),
    new Quotes(5, 'John Lennon', 'Life is what happens when you are busy making other plans', 'Josue', new Date())
  ];

  showMoreDetails(index){
    this.newquote[index].showMore = !this.newquote[index].showMore;
  }
  removeOne(removeQuote, index){
    if(removeQuote){
      this.newquote.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
