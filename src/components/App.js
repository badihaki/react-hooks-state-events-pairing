import video from "../data/video.js";
import VideoComponent from "./VideoComponent.js";
import CommentSection from "./CommentsSection.js";
import React, {useState} from "react";
/*
When the app loads, display a video along with its details and a list of all the comments
When a user clicks on the "👍" button, the number of upvotes for the video should increase
When a user clicks on the "👎" button, the number of downvotes for the video should increase
When the user clicks the "Hide Comments" button, the comments should be removed from the page, and the button text should change to "Show Comments". When the button is clicked again, it should toggle back to showing the comments.

The data you'll need for the app can be found in the data/video.js file.

Start by planning out what components you'll need and draw out your component hierarchy. Then, build out your components and pass down any data they need via props using the video object that's been imported in the App component.

Consider what components need to use state as you're building out these features.

There's an example of how to embed a video using an <iframe> in the App component. Other than that, you're on your own in terms of how to design each part of the application. Don't worry too much about getting the styling to match the demo. Focus on functionality.
*/
/*
Components:
App
  (Hide/Display Comments Logic)
  -Video
    - Like Button
      (Like state)
    - Dislike Button
      (Dislike State)
    - Hide Comments Button
  -CommentsSection
    (Add comment logic)
    - Comments
*/
function App() {
  console.log("Here's your data:", video);
  const [showComments, setShowComments] = useState(true);

  function handleCommentHideButton(){
    setShowComments(!showComments);
  }

  return (
    <div className="App">
      {/*<iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
  />*/}
  <VideoComponent video={video}/>
  <button onClick={handleCommentHideButton}>{showComments? "Hide Comments" : "Show Comments" }</button>
  {showComments? <CommentSection comments={video.comments} /> : "" }
    </div>
  );
}

export default App;
