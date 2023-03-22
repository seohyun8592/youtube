import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChnnelInfo';
import Comments from '../components/Comments';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <div className="contents__wrap">
      <article className="flex lg:block">
        <section className="w-9/12 lg:w-full">
          <div className="w-full pt-1/2 relative">
            <iframe
              id="player"
              className="absolute top-0 left-0"
              type="text/html"
              width="100%"
              height="100%"
              src={`http://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
              title={title}
            ></iframe>
          </div>

          <div className="pt-5">
            <div className="flex items-center">
              <ChannelInfo id={channelId} name={channelTitle} />
              <h2 className="ml-2">{title}</h2>
            </div>

            <p className="mt-4 rounded-xl bg-gray-100 p-3">{description}</p>
            <Comments id={channelId} />
          </div>
        </section>
        <section className="related__list ml-6 w-1/4 lg:w-full lg:ml-0 lg:mt-9">
          <RelatedVideos id={video.id} />
        </section>
      </article>
    </div>
  );
}
