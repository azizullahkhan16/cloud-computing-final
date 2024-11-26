const HomeComponent1 = () => {
  return (
    <div className="w-full pb-0 border-0 hero mb-7 mt-2 lg:mb-16 hero-slider">
      <video
        autoPlay
        playsInline
        loop
        muted
        className="w-full max-h-[539px] object-cover z-0 rounded-lg lg:rounded-3xl"
        src="/assets/videos/careem-video.mp4"
      ></video>
    </div>
  );
};

export default HomeComponent1;
