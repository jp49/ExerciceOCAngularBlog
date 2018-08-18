import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  @Input() indexOf: number;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  public onAddLove(index: number) {
    this.postService.addLove(index);
  }

  public onSubLove(index: number) {
    this.postService.subLove(index);
  }

  onDeletePost(index: number) {
    this.postService.removePost(index);
  }
}
