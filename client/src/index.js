import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Welcome from "./components/Welcome";
import Post from "./components/Post";
import reportWebVitals from "./reportWebVitals";

const post = {
	title: "Avengers",
	author: "Nick Fury",
	body: "I secretly recruited a group of superheroes to save our world.",
	comments: [
		"Avengers Assemble!",
		"Forget Avengers, we're living in the Matrix!",
		"There is no spoon, there is only Keanu Reeves",
	],
};

ReactDOM.render(
	<React.StrictMode>
		<Welcome name={"Teri"} location={"San Francisco"} />
		<Post
			title={post.title}
			author={post.author}
			body={post.body}
			comments={post.comments}
		/>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
