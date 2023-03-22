import axios from 'axios';

export default class FakeYoutubeClient {
  async search() {
    return axios.get('/videos/search.json');
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }

  async channels() {
    return axios.get('/videos/channels.json');
  }
  async comments() {
    return axios.get('https://www.googleapis.com/youtube/v3/comments');
  }
}
