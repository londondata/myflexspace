// Dopeness Feature

import React, { useState, useEffect } from "react";

function Dopeness() {
	// useState returns an array that gives us a state variable (dopeness), a function to CHANGE that state variable (setDopeness) and a set default value (initial state) for this state (0). we increment state.dopeness in the onClick button functionality, which essentially calls this.setState.
	// we use array destructuring syntax to give different names to the state variables declared by calling useState.
	const [dopeness, setDopeness] = useState(0);
	// const [ something, setSomething ] = useState({})

	// If there is NO dependency array, the side-effect runs after EVERY render.
	// With empty dependency array, side-effect runs ONCE after INITIAL render
	// Props or State in dependency array: will run ONCE on initial render AND anytime props or state in the array are changed.
	useEffect(() => {
		// console.log("this is all so dope!");
	}, [dopeness]);

	return (
		<div>
			<button
				style={{ margin: "12px" }}
				onClick={() => setDopeness(dopeness + 1)}
			>
				DOPE
			</button>
			<button onClick={() => setDopeness(dopeness - 1)}>NOT DOPE</button>
			<p> This post has {dopeness} level dopeness!</p>
		</div>
	);
}

export default Dopeness;

// import React, { Component } from "react";

// class Dopeness extends Component {
// 	state = {
// 		dopenessCount: 0,
// 	};

// 	increaseDopeness = () => {
// 		let moreDope = this.state.dopenessCount + 1;
// 		this.setState({
// 			dopenessCount: moreDope,
// 		});
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.increaseDopeness}>
// 					Dopeness: {this.state.dopenessCount}
// 				</button>
// 			</div>
// 		);
// 	}
// }
// export default Dopeness;
