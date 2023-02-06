import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChnnelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <article className="flex">
      <section>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          title={title}
        ></iframe>
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <p>{description}</p>
        </div>
      </section>
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </article>
  );
}
