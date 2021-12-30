import React from "react";
// Load in Comment component
import Comment from "../Comment";

function Post(props) {
	let comments = props.comments.map((comment, index) => (
		<Comment message={comment} key={index} />
	));
	return (
		<div>
			<h1>{props.title}</h1>
			<p>By {props.author}</p>
			<div>
				<p>{props.body}</p>
			</div>
			<h3>Comments:</h3>
			{comments}
		</div>
	);
}
/* LINE 14: Render Comment component, passing in data */

export default Post;
