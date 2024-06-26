"use client";

import { cn } from "@Util/shadcn";
import { useEffect, useRef, useState } from "react";

type InfoSet = {
  vidSrc: string;
  name?: string;
};
type Props = {
  infoSet: [InfoSet, InfoSet, InfoSet];
};

const VideoCard = ({ vidSrc, name }: InfoSet) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (() => {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.playsInline = true;

      videoElement.onwaiting = () => setIsLoading(true);
      videoElement.onplaying = () => setIsLoading(false);

      if (isPlaying) return videoElement.play();
      if (!isPlaying) return videoElement.pause();
    })();
  }, [isPlaying]);

  return (
    <div
      className={cn(
        "relative flex-1 hover:flex-[4] grid bg-black bg-cover bg-center p-4 rounded-2xl h-[32rem] will-change-transform origin-center transition-all duration-500 overflow-hidden ease-out group isolate",
        isLoading && "hover:animate-pulse"
      )}
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        src={vidSrc}
      ></video>
      <div className="absolute inset-0 bg-gradient-to-b from-25% from-black/0 to-black/70 will-change-transform transition-all group-hover:translate-y-1/2 duration-300 ease-out"></div>
      {name ? (
        <div className="relative mt-auto font-semibold text-base text-white truncate">
          {name}
        </div>
      ) : null}
    </div>
  );
};

const VideoHoverReveal = ({ infoSet }: Props) => {
  return (
    <div className="flex gap-6">
      {infoSet.map((itm, idx) => (
        <VideoCard key={idx} {...itm} />
      ))}
    </div>
  );
};

export default VideoHoverReveal;
