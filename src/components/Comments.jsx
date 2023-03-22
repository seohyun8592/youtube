import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Comments({ id }) {
  const { youtube } = useYoutubeApi();
  const { data: videoId } = useQuery(
    ['comment', id],
    () => youtube.comments(videoId),
    { staleTime: 1000 * 60 * 5 }
  );
  return <div>{videoId && id}</div>;
}
