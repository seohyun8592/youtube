import React from 'react';
import { useNavigate } from 'react-router-dom';
import { dateAgo } from '../util/date';

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <div className="thumbnail">
        <img src={thumbnails.medium.url} alt={title} />
      </div>
      <div className="item__info">
        <p>{title}</p>
        <span className="text-xs">{channelTitle}</span>
        <p className="text-xs">{dateAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
