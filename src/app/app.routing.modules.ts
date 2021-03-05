import {  NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import{MainListComponent} from './main-list/main-list.component'
import{FavoriteAutorComponent} from './favorite-autor/favorite-autor.component'
const appRoute:Routes=[
    // {path:'', redirectTo:'/recipe',pathMatch:'full'},
    // {path:'recipe', component:RecipesComponent,children:[
    //  {path:'',component:RecipeStartComponent},
    //   {path:'new', component:RecipeEditComponent},
     
    {path:'autor', component:MainListComponent},
   {path:'fav',component:FavoriteAutorComponent}
]
@NgModule({
imports:[RouterModule.forRoot(appRoute)],
exports:[RouterModule]
})

export class AppRoutingModule{}