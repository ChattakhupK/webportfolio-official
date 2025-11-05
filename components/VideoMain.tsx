const VideoMain = () => {
  return (
    <div className="w-full mx-auto">
      <video
        src="/vdo/vecteezy_enthusiastic-indian-it-programmer-working-on-desktop_27492250.mp4"
        autoPlay
        loop={true}
        muted={true}
        preload="auto"
        playsInline
        disablePictureInPicture
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        className="w-full my-15 rounded-2xl pointer-events-none select-none"
      />
    </div>
  );
};

export default VideoMain;
