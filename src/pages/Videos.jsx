import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
// import { FakeYoutube } from '../api/fakeYoutube';
import { useYoutubeApi } from '../context/YoutubeApiContext';
// import { Youtube } from '../api/Youtube';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));

  return (
    <div className="contents__wrap pl-5">
      <div>Videos {keyword}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {videos && (
        <ul className="flex flex-wrap">
          {videos.map((i) => (
            <li key={i.id}>{i.snippet.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
