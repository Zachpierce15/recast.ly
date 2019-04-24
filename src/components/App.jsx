import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";
import Search from "./Search.js";
import YOUTUBE_API_KEY from "../config/youtube.js";
import exampleVideoData from "../data/exampleVideoData.js"

// import React from 'react';
class App extends React.Component {
    constructor(props) {
      super(props);
      this.option = {
        max: 5,
        key: YOUTUBE_API_KEY,
        query: "diablo 3"
      }
      this.state = {
        beingPlayed: exampleVideoData[0],
        playList: exampleVideoData,
        query: ''
      }

    }
    componentDidMount() {
      var callBack = function(data) {
        this.setState({
          beingPlayed: data[0],
          playList: data
        });
      }
      this.props.searchYouTube(this.option, callBack.bind(this));
    }
    playVideo(video) {
      // this.state.playList.push(this.state.beingPlayed);
      // var indexOfVideo = this.state.playList.indexOf(video);
      // this.state.playList.splice(indexOfVideo, 1);
      this.setState({
        beingPlayed: video
      });
    }

    changeQuery(event) {
      //When clicked... Changes our query to the input text. 
      
      const keptEvent = event;
      console.log(keptEvent);
      this.setState({query: keptEvent.target.value});
      console.log(keptEvent.target.value);
    }
    startSearch() {
      this.option.query = this.state.query;
      console.log(this.option.query);
      var callBack = function(data) {
        this.setState({
          beingPlayed: data[0],
          playList: data
        });
      }
      this.props.searchYouTube(this.option, callBack.bind(this));
    }
    render() {
        return (<div>
            <nav className="navbar">
              <div className="col-md-6 offset-md-3">
                <div><Search onChange={this.changeQuery.bind(this)} onClick={this.startSearch.bind(this)}/> </div>
              </div>
            </nav>
            <div className="row">
              <div className="col-md-7">
                <div><VideoPlayer video={this.state.beingPlayed}/></div>
              </div>
              <div className="col-md-5">
                <div> <VideoList videos={this.state.playList} onClick={this.playVideo.bind(this)}/></div>
              </div>
            </div>
          </div>); 
      }
}
// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em><VideoPlayer video={exampleVideoData[0]}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> <VideoList videos={exampleVideoData}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

