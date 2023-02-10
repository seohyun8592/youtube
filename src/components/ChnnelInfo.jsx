import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ['channel', id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div className="w-10 h-10 rounded-full overflow-hidden">
      {url && <img className="w-full h-full" src={url} alt={name} />}
    </div>
  );
}
