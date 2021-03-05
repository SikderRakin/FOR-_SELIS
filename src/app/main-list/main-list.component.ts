import { Component, OnInit } from '@angular/core';
import{AuthorListService} from '../shared/autor-service';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  author:any;
  length = 5;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor(private autor:AuthorListService) { }
 

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  onPageChange(event:PageEvent){
  const startIndex=event.pageIndex * event.pageSize;
  let endIndex=startIndex+event.pageSize;
  this.author=this.autor.getAuthor(event.pageSize,endIndex) 
  .subscribe((data) => {
    this.author = data.results;
    console.log(this.author);
  });
    console.log(event);
  }
  ngOnInit(): void {
   
    this.author=this.autor.getAuthor(this.length,this.pageSize) 
    .subscribe((data) => {
      this.author = data.results;
      console.log(this.author);
    });
  }

}
