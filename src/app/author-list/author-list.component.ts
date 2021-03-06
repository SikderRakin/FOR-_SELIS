import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit,Input } from '@angular/core';
import{AuthorListService} from '../shared/autor-service'
@Component({ 
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  constructor(private autor:AuthorListService) { }
  @Output() authorEmmit = new EventEmitter<any>();
  _author
  @Input() set author(value) {
    if (value !== undefined) {
      this._author = value;
    }
  }
  get author() {
    return this._author;
  }
    btn="Add favorite"
  ngOnInit(): void {
  
 
  }
  addOn(item){
 item.isFavorite=true;
 this.authorEmmit.emit(item);
   }
   addRemove(item){
    item.isFavorite=false;
    this.authorEmmit.emit(item);
      }

}

