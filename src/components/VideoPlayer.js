import React from 'react';
import YouTube from 'react-youtube';


class VideoPlayer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        videoId : "",
        opts : {
          height: '390',
          width: '640',
          playerVars: { 
            autoplay: 0
          }
        }
      }
    }
  

  
    render() {
      const videoId = this.state.videoId;
      return (
        videoId !== "" ? (
            <YouTube
            videoId={videoId}
            opts={this.state.opts}
          />
          ) : "no video found"
      );
    }
  }


  export default VideoPlayer;