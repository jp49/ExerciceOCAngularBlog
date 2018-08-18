import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PostsService} from './services/posts.service';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent},
  { path: 'new', component: NewPostComponent},
  { path: '**', component: PostListComponent},
  { path: '', component: PostListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    HeaderComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
