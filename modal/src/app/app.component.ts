import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './app.service';


@Component({
 selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
})

export class AppComponent implements OnInit { 
  _title = 'APP Component'; 

  book: any[]=[];
  mostrar: boolean = false;
  nombre: string;
  name: Object;

  tags: string[] = [];
  selectedTag: string
  linkImage: string;
  statusCode: string;
  private appService: AppService
  

  ngOnInit(): void {
    this.appService.getTags()
    .subscribe(tags => {
      console.log(tags);
      this.tags = tags;
    });
  }
  
  constructor(
    appService:AppService
  ) {appService.getTags().subscribe((books)=>
    this.book=books) }

  

 
  pesquisar(){
    this.book.forEach(page => {
      console.log(page)
      if(this.nombre == page.isbn){
        this.name = page['numberOfPages']
        console.log(this.name)
      }
    });
  }
}