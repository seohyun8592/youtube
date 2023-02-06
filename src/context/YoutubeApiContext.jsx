import { createContext, useContext } from 'react';
import { YoutubeClient } from '../api/youtubeClient';
import { Youtube } from '../api/youtube';
import { FakeYoutubeClient } from '../api/fakeYoutubeClient';

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
