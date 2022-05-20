import React, {useState} from "react";

function LikeButton({upvotes}){
    const [votes, setVoteCount] = useState(upvotes);

    function handleButton(){
        setVoteCount(votes+1);
    }

    return(
        <button onClick={handleButton}>{votes}👍</button>
    )
}

export default LikeButton;