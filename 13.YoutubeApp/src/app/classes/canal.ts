export class Canal {
  nombre: string;
  playListId: string;
  nextPageToken: string;
  videos: any[];

  constructor() {
    this.videos = [];
  }
}
