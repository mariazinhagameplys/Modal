import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  book: any[]=[];
  mostrar: boolean = false;

  nombre: string;

  name: Object;
 
  aparecer () {
    this.mostrar = !this.mostrar;
  }
  
  constructor(
    appService:AppService
  ) {appService.getTags().subscribe((books)=>
    this.book=books) }

  ngOnInit() {
  }

  pesquisar(){
    this.book.forEach(page => {
      console.log(page)
      if(this.nombre == page.isbn){
        this.name = page['name']
        console.log(this.name)
      }
    });
  }
}
