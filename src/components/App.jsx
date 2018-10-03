import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: {}
    };
    
  }
  

  
  componentDidMount() {
    this.getYouTubeVideos('Funny videos');
  }
  
  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
    
    this.props.searchYouTube(options, (videos) =>
      
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
      
    );
  }
  
  switchVideo(video) {     
    this.setState({currentVideo: video});
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search searchInput={this.getYouTubeVideos.bind(this)}/>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.currentVideo}/>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.state.videos} 
                switchVideo={this.switchVideo.bind(this)}
              />          
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default App;

//convert to ES6 class
// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
        
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div>
//           <VideoPlayer video={exampleVideoData[0]}/>
//         </div>
//       </div>
//       <div className="col-md-5">
//         <div>
//           <VideoList videos={exampleVideoData}/>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined