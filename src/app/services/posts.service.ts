import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../models/Post.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];

  postsSubject =new Subject<Post[]>();

  constructor() { }

  emitPost() {
    this.postsSubject.next(this.posts);
  }

   savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPost();
      });
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPost();
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPost();
  }

  public addLove(index: number) {
    const loveIts = this.posts[index].loveIts;
    this.posts[index].loveIts = loveIts + 1;
    this.savePosts();
    this.emitPost();
  }

  public subLove(index: number) {
    const loveIts = this.posts[index].loveIts;
    this.posts[index].loveIts = loveIts - 1;
    this.savePosts();
    this.emitPost();
  }
}
