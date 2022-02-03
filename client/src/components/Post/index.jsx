import React from "react";
// Load in Comment component
import Comment from "../Comment";
import Dopeness from "../Dopeness";

function Post(props) {
	let comments = props.comments.map((comment, index) => (
		<Comment message={comment} key={index} />
	));
	return (
		<div className="flex-post">
			<div className="top-row">
				<h1>{props.title}</h1>
				<p>By {props.author}</p>
				<div>
					<p className="post-body">{props.body}</p>
				</div>
				<div className="dopeness">
					<Dopeness />
				</div>
				<h3>Comments:</h3>
				{comments}
			</div>
		</div>
	);
}
/* LINE 14: Render Comment component, passing in data */

export default Post;
