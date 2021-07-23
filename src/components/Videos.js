import React from "react";

import "../styles/Video.scss";

const Video = () => {
    return (
<div className="container">
    <p className="ps-3 main-heading text-center" >Latest videos</p>
    <div class="card-group ">
  <div class="card mx-3 video-card">
  <div class="card-body py-3">
  
    </div>
    
  <iframe class="video-img"title="भूकंप की भविष्यवाणियां, पहली बार ज्योतिष के इतिहास में भूकंप की सटीक भविष्यवाणी | Prashant Kapoor"  src="https://www.youtube.com/embed/KtjCwuno7fg?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
  <h6 class="wpb_heading wpb_video_heading py-2">Earthquake Predictions Came true date wise</h6>
  </div>
  <div class="card mx-3 video-card">
  <div class="card-body">
  
    </div>
    
    <iframe  class="video-img" title="India China War - Crucial role of NEPAL astrological analysis by Prashant Kapoor" src="https://www.youtube.com/embed/BIlc9-rPsXY?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    <h6 class="wpb_heading wpb_video_heading py-2">India China War - Crucial role of NEPAL</h6>
  </div>
  <div class="card mx-3 video-card">
  <div class="card-body">
  
    </div>
    
    <iframe  class="video-img" title="Pakistan to split into three. POK, Gilgit Baltistan to be merged in India in 2020? | Prashant Kapoor" src="https://www.youtube.com/embed/XPtFOlsp2L0?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    <h6 class="wpb_heading wpb_video_heading">Pakistan to split into three. POK, Gilgit Baltistan to be merged in India in 2020</h6>
  </div>
  
</div>
<div className=" text-center py-5">
<button type="button" class="btn btn-secondary">VIEW ALL</button>
</div>
</div>
    );
}

export default Video;