import { Component } from '@angular/core';


type Post = {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      loveIts: 3,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      loveIts: -2,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
