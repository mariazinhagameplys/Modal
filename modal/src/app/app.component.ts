import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './app.service';


@Component({
 selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
})

export class AppComponent { 
  _title = 'APP Component'; 

  tags: string[] = [];
  selectedTag: string
  linkImage: string;
  statusCode: string;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.getTags()
    .subscribe(tags => {
      console.log(tags);
      this.tags = tags;
    });
  }

  consultar() {
    console.log(this.selectedTag);
    this.linkImage = 'https://anapioficeandfire.com/api';
  }
}