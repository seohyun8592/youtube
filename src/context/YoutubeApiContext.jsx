import { createContext, useContext } from 'react';
// import { FakeYoutubeClient } from '../api/fakeYoutubeClient';
import { YoutubeClient } from '../api/YoutubeClient';
import { Youtube } from '../api/Youtube';

export const YoutubeContext = createContext();

const client = new YoutubeClient();
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
