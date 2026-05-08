import { useEffect } from 'react';
import { trackVideo } from '../dataLayer';

export const useVideoTracking = (videoRef: React.RefObject<HTMLVideoElement | null>, videoName: string) => {

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let playFired = false;
    let progress25Fired = false;
    let progress50Fired = false;
    let progress75Fired = false;
    let completeFired = false;

    const handlePlay = () => {
      if (!playFired) {
        trackVideo("video_play", videoName);
        playFired = true;
      }
    };

    const handleTimeUpdate = () => {
      if (video.duration) {
        const percent = (video.currentTime / video.duration) * 100;

        if (percent >= 25 && !progress25Fired) {
          trackVideo("video_progress_25", videoName);
          progress25Fired = true;
        }
        if (percent >= 50 && !progress50Fired) {
          trackVideo("video_progress_50", videoName);
          progress50Fired = true;
        }
        if (percent >= 75 && !progress75Fired) {
          trackVideo("video_progress_75", videoName);
          progress75Fired = true;
        }
      }
    };

    const handleEnded = () => {
      if (!completeFired) {
        trackVideo("video_complete", videoName);
        completeFired = true;
      }
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [videoName, videoRef]);
};
