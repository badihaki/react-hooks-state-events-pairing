import React, {useState} from "react";

function DislikeButton({downvotes}){
    const [votes, setVoteCount] = useState(downvotes);

    function handleButton(){
        setVoteCount(votes+1);
    }

    return(
        <button onClick={handleButton}>{votes}👎</button>
    )
}

export default DislikeButton;