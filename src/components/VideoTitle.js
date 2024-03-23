const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] md:px-24 px-6 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:hidden lg:inline-block text-lg py-6 w-1/4">
        {overview}
      </p>
      <div className="md:md-0 md:2">
        <button className="bg-white text-black md:p-3 p-2 md:px-10 px-4 mx-2 md:mt-0 mt-4 md:text-xl text-lg rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden lg:inline-block bg-gray-500 text-white p-3 px-10 text-xl bg-opacity-70 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
