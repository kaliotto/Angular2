export class Canal {
  id: string;
  nombre: string;
  uploads: {
    nextPageToken: string;
    videos: Video[];
  }

  constructor() {
    this.uploads = {
      nextPageToken: "",
      videos: []
    };
  }
}

export class Video {
  id: string;
  titulo: string;
  descripcion: string;
  thumbnail: string;
}
