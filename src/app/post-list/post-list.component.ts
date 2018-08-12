import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  public onAddLove() {
    this.loveIts = this.loveIts + 1;
    console.log(this.loveIts);
  }

  public onSubLove() {
    this.loveIts = this.loveIts - 1;
    console.log(this.loveIts);
  }
}
