import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-nav',
  templateUrl: './quote-nav.component.html',
  styleUrls: ['./quote-nav.component.css']
})
export class QuoteNavComponent implements OnInit {

  showForm: boolean;
  toggleForm() {
    this.showForm = !this.showForm;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
