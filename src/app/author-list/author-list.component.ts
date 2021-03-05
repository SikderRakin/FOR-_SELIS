import { Component, OnInit,Input } from '@angular/core';
import{AuthorListService} from '../shared/autor-service'
@Component({ 
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  constructor(private autor:AuthorListService) { }
  @Input() author: any=[];

  ngOnInit(): void {
    console.log("gg");
  
    console.log(this.author);
  }
  addOn(item){
    
    debugger;
 this.autor.addIngredients(item);
   }

}
