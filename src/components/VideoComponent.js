import React from "react";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";

function VideoComponent({video}){
    return (
        <div>
            <div>
                <iframe
                    width="919"
                    height="525"
                    src={video.embedUrl}
                    frameBorder="0"
                    allowFullScreen
                    title="Thinking in React"
                />
                <h1>
                    {video.title}
                </h1>
            </div>
            <span>
                <LikeButton upvotes = {video.upvotes}/>
            </span>
            <span>
                <DislikeButton downvotes = {video.downvotes} />                
            </span>
        </div>
    )
}

export default VideoComponent;