import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() page: any;
  @Output() navigation: any = new EventEmitter();
  

  constructor(private router:Router) { }

  
  isList: boolean = true
  isTimeWeb: boolean = false
  isWebDizajn: boolean = true
  isOnama: boolean = true
  iskontakt: boolean = true
  lista: any 
  

  ngOnInit() {
    this.goToPage(this.page)
    this.lista = localStorage.getItem('list');
    if(this.lista == null){
      this.lista = 0;
    }
  }

  goToPageSection(section: string){
    this.navigation.emit(section)
  }

  
  goToPage(pageName: string):void{
    this.router.navigate([`${pageName}`]);
    if(pageName == "list"){
      this.isList = false
      this.isTimeWeb = true
      this.isWebDizajn = true
      this.isOnama = true
      this.iskontakt = true
    }
    if(pageName == "timeweb"){
      this.isList = true
      this.isTimeWeb = false
      this.isWebDizajn = true
      this.isOnama = true
      this.iskontakt = true
    }
    if(pageName == "webdizajn"){
      this.isList = true
      this.isTimeWeb = true
      this.isWebDizajn = false
      this.isOnama = true
      this.iskontakt = true
    }
    if(pageName == "onama"){
      this.isList = true
      this.isTimeWeb = true
      this.isWebDizajn = true
      this.isOnama = false
      this.iskontakt = true
    }
    if(pageName == "kontakt"){
      this.isList = true
      this.isTimeWeb = true
      this.isWebDizajn = true
      this.isOnama = true
      this.iskontakt = false
    }
  }

}
