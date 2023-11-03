import { Video } from "../../entities/video";
import { videos } from "./const";

const MainPage = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-center gap-x-5 gap-y-8 m-5">
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          channel_name={video.channel_name}
          duration={video.duration}
          views={video.views}
          added_time={video.added_time}
        >
          video
        </Video>
      ))}
    </main>
  );
};

export default MainPage;
