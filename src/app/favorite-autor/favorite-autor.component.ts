import { Component, OnInit } from '@angular/core';

import{AuthorListService} from '../shared/autor-service'
import{Subscription} from 'rxjs';
@Component({
  selector: 'app-favorite-autor',
  templateUrl: './favorite-autor.component.html',
  styleUrls: ['./favorite-autor.component.css']
})
export class FavoriteAutorComponent implements OnInit {
  constructor(private authorssl:AuthorListService) { }
  authorList:any=[];
  igChangeSub:Subscription;
  ngOnInit(): void {
    this.authorList=this.authorssl.getAllIngredient();
  
    this.igChangeSub=this.authorssl.authorChange
      .subscribe((ingredients: any[]) => this.authorList = ingredients);
      console.log("new")
      console.log(this.authorList)
  }

}
