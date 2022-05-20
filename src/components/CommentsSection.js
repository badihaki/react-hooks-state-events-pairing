import React from "react";

function CommentSection({comments}){
    const commentsElements = comments.map( (comment) =>{
        return(
            <div key={comment.id}>
                <h3>{comment.user}</h3>
                <div>{comment.comment}</div>
            </div>
        )
    })

    return (
        <div>
            <h2>{comments.length} Comments</h2>
            {commentsElements}
        </div>
    )
}

export default CommentSection;