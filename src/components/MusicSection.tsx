import { Play } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
}

const videos: VideoItem[] = [
  {
    id: "1",
    title: "Video 1",
    youtubeId: "PXLphWwcaNA",
  },
  {
    id: "2",
    title: "Video 2",
    youtubeId: "04MngShhQG4",
  },
  {
    id: "3",
    title: "Video 3",
    youtubeId: "cGpRC_h9Lyg",
  },
  {
    id: "4",
    title: "Video 4",
    youtubeId: "EsQMvMbD8jM",
  },
];

const VideoCard = ({ video }: { video: VideoItem }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <a
      href={`https://youtu.be/${video.youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="video-card group block"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75">
            <Play className="h-7 w-7 ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-lg border-2 border-gold/0 transition-all duration-300 group-hover:border-gold/50" />
      </div>
    </a>
  );
};

const MusicSection = () => {
  return (
    <section id="music" className="relative py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container relative mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="section-title animate-fade-up">MUSIC VIDEOS</h2>
          <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        {/* Video Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
