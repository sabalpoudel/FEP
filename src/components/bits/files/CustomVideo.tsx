import { MouseEvent, useRef, useState } from "react";
import { CustomVideoWrapper } from "./CustomVideoWrapper";
import { Box, IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

type TCustomVideoPlayer = {
  title: string;
  src: string;
  className: string;
};

const CustomVideoPlayer = (props: TCustomVideoPlayer) => {
  const { title, src, className } = props;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef?.current?.paused) {
      videoRef?.current?.play();
      setPlaying(true);
    } else {
      videoRef?.current?.pause();
      setPlaying(false);
    }
  };

  const updateProgress = () => {
    if (!videoRef?.current) return;
    const percent =
      (videoRef?.current?.currentTime / videoRef?.current?.duration) * 100;
    setProgress(percent);
  };

  const seekVideo = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef?.current || !progressRef?.current?.offsetWidth) return;
    const newTime =
      (e.nativeEvent.offsetX / progressRef.current.offsetWidth) *
      videoRef?.current?.duration;
    videoRef.current.currentTime = newTime;
  };

  return (
    <CustomVideoWrapper className={`${className} cvw`}>
      <video
        title={title}
        ref={videoRef}
        onClick={togglePlay}
        className="cvw-video"
        onTimeUpdate={updateProgress}
      >
        <source src={src} />
      </video>

      {/* Controls */}
      <div className="cvw-controls">
        <div className="cvw-controls-bar" ref={progressRef} onClick={seekVideo}>
          <Box
            className="cvw-controls-bar-progress"
            sx={{ width: `${progress}%` }}
          ></Box>
        </div>
      </div>
      <div className="cvw-pause-play" onClick={togglePlay}>
        <IconButton
          aria-label="play/pause"
          color="primary"
          className="cvw-pause-play-btn"
        >
          {playing ? (
            <PauseCircleIcon fontSize="inherit" />
          ) : (
            <PlayCircleIcon fontSize="inherit" />
          )}
        </IconButton>
      </div>
    </CustomVideoWrapper>
  );
};

export default CustomVideoPlayer;
