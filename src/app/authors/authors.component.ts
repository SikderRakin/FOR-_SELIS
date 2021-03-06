import { Component, OnInit } from '@angular/core';
import{AuthorListService} from '../shared/autor-service';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  author:any[];
  length = 3;
  pageSize = 3;
  pageSizeOptions: number[] = [3, 10, 25, 100];
  constructor(private _authorService:AuthorListService) { }
  favoriteAuthorList=[];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  onPageChange(event:PageEvent){
   
  
    let endIndex= event.pageIndex*event.pageSize;
    this._authorService.getAuthor(event.pageSize,endIndex) 
    .subscribe((data) => {
      this.author = data.results;
      this.author.forEach(element => {
        element.isFavorite=false;
        
      
    });
     
    });
    }

  ngOnInit(): void {
    this._authorService.getAuthor(this.length,this.pageSize) 
    .subscribe((data) => {
      this.author = data.results;
      this.author.forEach(element => {
        element.isFavorite=false;
        
      });
   
    });
  }
  authorEmmit(event:any){
    debugger;
if(!event.isFavorite){
  let indexOfFavoriteAuthor=this.favoriteAuthorList.findIndex(x=>x._id==event._id);
  this.favoriteAuthorList.splice(indexOfFavoriteAuthor,1)
  this.author.push(event);
}else{
  let indexOfAuthor=this.author.findIndex(x=>x._id==event._id)
  this.author.splice(indexOfAuthor,1);
  this.favoriteAuthorList.push(event)
}
  }
}
