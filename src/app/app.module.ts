import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { AuthorListComponent } from './author-list/author-list.component';
import{AppRoutingModule} from 'src/app/app.routing.modules';
import{AuthorListService} from './shared/autor-service';
import { FavoriteAutorComponent } from './favorite-autor/favorite-autor.component';
import { MainListComponent } from './main-list/main-list.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorListComponent,
    FavoriteAutorComponent,
    MainListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule,
    MatSliderModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  providers: [AuthorListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
