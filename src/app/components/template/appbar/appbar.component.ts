import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toHome(){
    document.getElementById('home')?.scrollIntoView({behavior:'smooth'});
  }
  toServices(){
    document.getElementById('myservices')?.scrollIntoView({behavior:'smooth'});
  }
  toAbout(){
    document.getElementById('about')?.scrollIntoView({behavior:'smooth'});
  }
  toContact(){
    document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
  }
  toPortfolio(){
    document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth'});
  }
}
