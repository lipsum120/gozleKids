import { ReactNode, useState } from "react";
import { ChannelImg } from "../../../shared/ui";
import "./index.css";
import { shortenNumber } from "../lib/shortenNumber";
import { secondsToHMS } from "../lib/durationParse";

type Video = {
  children: ReactNode;
  title: string;
  channel_name: string;
  duration: number;
  views: number;
  added_time: string;
};

export const Video = ({
  children,
  title,
  channel_name,
  duration,
  views,
  added_time,
}: Video) => {
  const [isHover, setIsHover] = useState(false);

  const onMouseOver = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div className="w-full">
      <div
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        className="bg-gray-300 w-full aspect-video rounded-lg relative overflow-hidden cursor-pointer"
      >
        {isHover ? children : null}
        <p className="absolute bottom-3 right-3 bg-black bg-opacity-90 px-1.5 py-0.5 rounded-md text-sm text-gray-200 select-none">
          {secondsToHMS(duration)}
        </p>
        {/* <div className="absolute bottom-0 w-full h-[3px] hover:scale-200 duration-100 bg-blue-400 cursor-pointer"></div> */}
      </div>
      <article className="flex space-x-3 mt-3 cursor-default">
        <ChannelImg size="sm" />
        <section>
          <p className="w-full line-clamp-2 text-base sm:text-sm xl:text-base font-semibold">
            {title}
          </p>
          <section className="flex text-sm sm:text-xs md:text-sm space-x-3">
            <p>{channel_name}</p>
            <p>{shortenNumber(views)} views</p>
            <p>{added_time}</p>
          </section>
        </section>
      </article>
    </div>
  );
};
