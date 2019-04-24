// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from "./data/exampleVideoData.js";
import searchYouTube from "./lib/searchYouTube.js";

// var option = {
//     max: 5,
//     key: YOUTUBE_API_KEY,
//     query: "diablo 3"
// }


// searchYouTube(option, function(data){
//     var liveData = {};
//     liveData['diablo3'] = data;
//     console.log(liveData);
//     console.log(Object.keys(liveData));

// });


ReactDOM.render(<App searchYouTube={searchYouTube.bind(this)}/>, document.getElementById('app'));

