var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    type: "GET",
    data: {
      key: options.key,
      part: "snippet",
      videoEmbeddable: "true",
      type: "video",
      q: options.query,
      maxResults: options.max,
    },
    success: function(data) {
      callback(data.items);
    }, 
    error: function(error) {
      console.log(error); 
    }
  })
};

export default searchYouTube;
