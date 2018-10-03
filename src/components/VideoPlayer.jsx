
var VideoPlayer = (props) => {
  if (props.video.id === undefined) {
    return (
      <div className="video-list">
        No videos available
      </div>
    );
  }

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + props.video.id.videoId} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.video.snippet.title}</h3>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
};


// var VideoPlayer = (props) => (
//   <div className="video-player">
//     {props.videoplayer.map(video =>
//       <VideoListEntry video={video} />
//     )}
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + props.id.videoId} allowFullScreen></iframe>
// //     </div>
// //     <div className="video-player-details">
//       <h3>{props.videoname.snippet.title}</h3>
//       <div>{props.videoname.snippet.description}</div>
// //     </div>
// //   </div>
// // );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
