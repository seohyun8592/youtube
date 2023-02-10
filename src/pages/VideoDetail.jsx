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
    <div className="contents__wrap">
      <article className="flex px-5">
        <section className="w-9/12">
          <iframe
            id="player"
            type="text/html"
            width="100%"
            height="640"
            src={`http://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            title={title}
          ></iframe>
          <div className="pt-5">
            <div className="flex items-center">
              <ChannelInfo id={channelId} name={channelTitle} />
              <h2 className="ml-2">{title}</h2>
            </div>

            <p className="mt-4 rounded-xl bg-gray-100 p-3">{description}</p>
          </div>
        </section>
        <section className="ml-6 w-1/4">
          <RelatedVideos id={video.id} />
        </section>
      </article>
    </div>
  );
}
