import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  page: string = "list"

  lista: any =[];
  zadnjiunizu: any
  dodajlisti: any = {};

  ngOnInit() {
    this.lista = JSON.parse(localStorage.getItem('lista') || '[]');
    localStorage.setItem('list', this.lista.length);
    this.zadnjiunizu = this.lista.length - 1;
  }

  GoDownPosition(pocetniIndex: any) {
    var odrediste = pocetniIndex + 1;
    this.lista.splice(odrediste,0,this.lista.splice(pocetniIndex,1)[0])
    console.log(this.lista);
    return this.lista;
  }


  GoUpPosition(pocetniIndex: any) {
    var odrediste = pocetniIndex -1;
    this.lista.splice(odrediste,0,this.lista.splice(pocetniIndex,1)[0])
    console.log(this.lista);
    return this.lista;
  }

  DeleteEntry(index: any){
    this.lista.splice(index,1)
    localStorage.setItem("lista", JSON.stringify(this.lista));
    localStorage.setItem('list', this.lista.length);
    this.zadnjiunizu = this.lista.length - 1;
  }

  SaveEntry(){
    var lenght = localStorage.getItem('list') ;
    if (lenght == null || lenght == 'undefined'){
      var duljina = 0;
    }else {
      duljina = Number(lenght);
    }
    this.dodajlisti.id = duljina;    
    this.lista.push(this.dodajlisti)
    localStorage.setItem("lista", JSON.stringify(this.lista));
    localStorage.setItem('list', this.lista.length);
    this.zadnjiunizu = this.lista.length - 1;
    this.dodajlisti = {};
  }

}
