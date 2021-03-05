import {  NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import{AuthorsComponent} from './authors/authors.component';
import{LandingPageComponent} from './landing-page/landing-page.component'
const appRoute:Routes=[
    // {path:'', redirectTo:'/recipe',pathMatch:'full'},
    // {path:'recipe', component:RecipesComponent,children:[
    //  {path:'',component:RecipeStartComponent},
    //   {path:'new', component:RecipeEditComponent},
    {path:'landing-page',component:LandingPageComponent},
   
   {path:'authorList',component:AuthorsComponent}
]
@NgModule({
imports:[RouterModule.forRoot(appRoute)],
exports:[RouterModule]
})

export class AppRoutingModule{}