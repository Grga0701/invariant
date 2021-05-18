import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timweb',
  templateUrl: './timweb.component.html',
  styleUrls: ['./timweb.component.css']
})
export class TimwebComponent implements OnInit {

  page: string = "timeweb"
  constructor() { }

  ngOnInit() {

  }

  scrollToElement(element: any){
    const el: HTMLElement|null = document.getElementById(element);
    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 0);
    }
  }
}
