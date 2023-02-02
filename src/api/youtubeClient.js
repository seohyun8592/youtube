import axios from 'axios';

export class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }
  async search(params) {
    return this.httpClient('search', params);
  }

  async videos(params) {
    return this.httpClient('videos', params);
  }
}
