import React from 'react';
import AddYoutubeForm from '../forms/AddYoutubeForm';
import Youtube from '../single/youtube';
import { connect } from 'react-redux';

const YoutubeList = (props) => {
  let listOfYoutube = props.youtubeVideos.map(video => <Youtube key={video.id} video={video} />)
  return (
    <div>
      <AddYoutubeForm />
      { listOfYoutube }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    youtubeVideos: state.youtubeVideos
  }
}

export default connect(mapStateToProps)(YoutubeList);
