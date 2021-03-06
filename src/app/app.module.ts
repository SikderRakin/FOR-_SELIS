import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { HeaderComponent } from './header/header.component';
import { AuthorListComponent } from './author-list/author-list.component';
import{AppRoutingModule} from 'src/app/app.routing.modules';
import{AuthorListService} from './shared/autor-service';
// import { FavoriteAutorComponent } from './favorite-autor/favorite-autor.component';

import { AuthorsComponent } from './authors/authors.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorListComponent,
    // FavoriteAutorComponent,
    // MainListComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule,
    MatSliderModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  providers: [AuthorListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
