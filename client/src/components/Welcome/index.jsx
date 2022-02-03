import "./styles.css";
import background from "../../images/background.jpg";
// bring in React from React
import React from "react";

// define our Welcome functional component
function Welcome(props) {
	// what should the component return
	return (
		// Make sure to return some UI
		<div
			style={{ backgroundImage: `url(${background})` }}
			className="flex-body"
		>
			<h1 className="welcome-text">Welcome to MyFlexSpace, {props.name} </h1>
			<span className="welcome-text">
				You are located in<h3>{props.location}!</h3>
			</span>
		</div>
	);
}

export default Welcome;
