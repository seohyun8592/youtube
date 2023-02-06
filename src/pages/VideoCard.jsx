import React from 'react';

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li>
      <div className="thumbnail">
        <img src={thumbnails.medium.url} alt={title} />
      </div>
      <div className="item__info">
        <p>{title}</p>
        <span className="text-xs">{channelTitle}</span>
        <p className="text-xs">{publishedAt}</p>
      </div>
    </li>
  );
}
