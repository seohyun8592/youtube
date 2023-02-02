import { createContext, useContext } from 'react';
import { FakeYoutubeClient } from '../api/fakeYoutubeClient';
import { Youtube } from '../api/youtube';
// import { YoutubeClient } from '../api/youtubeClient';

export const YoutubeContext = createContext();

const client = new FakeYoutubeClient();
const youtube = new Youtube(client);
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeContext.Provider value={{ youtube }}>
      {children}
    </YoutubeContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeContext);
}
