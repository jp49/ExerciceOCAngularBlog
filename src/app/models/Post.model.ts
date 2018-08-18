export class Post {
    constructor(
      public title: string,
      public content: string,
      public loveIts: number,
      public created_at: string) {
        this.created_at = new Date().toJSON();
    }
}
