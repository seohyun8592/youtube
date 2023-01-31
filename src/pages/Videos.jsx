import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
// import { FakeYoutube } from '../api/FakeYoutube';
import { Youtube } from '../api/Youtube';

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    const youtube = new Youtube();
    return youtube.search(keyword);
  });

  return (
    <>
      <div>Videos {keyword}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {videos && (
        <ul>
          {videos.map((i) => (
            <li key={i.id}>{i.snippet.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
