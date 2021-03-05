
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import {  Injectable } from '@angular/core';
@Injectable()
export class AuthorListService{
    authorChange= new Subject<any[]>();
  
    //   ];
    constructor(private http: HttpClient){}
    authorList=[];
    //configUrl = 'https://api.quotable.io/authors?limit=10&skip=20 ';
    
    getAuthor(a:any,b:any):Observable<any>{
       
        debugger;
        return this.http.get(`https://api.quotable.io/authors?limit=${a}&skip=${b}`);

    }
    getAllIngredient(){
        debugger;
        console.log(this.authorList)
         return this.authorList.slice();
     
      }
    addIngredients(author:any []){
        debugger;
        
      
        this.authorList.push(author);  
        console.log( this.authorList);
        this.authorChange.next(this.authorList.slice())
      }
      
}