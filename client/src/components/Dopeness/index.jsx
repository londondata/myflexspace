import React, { Component } from "react";

class Dopeness extends Component {
	// Setting the initial state for the dopenessCount to be 0
	state = {
		dopenessCount: 0,
	};

	increaseDopeness = () => {
		let moreDope = this.state.dopenessCount + 1;
		this.setState({
			dopenessCount: moreDope,
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.increaseDopeness}>
					Dopeness: {this.state.dopenessCount}
				</button>
			</div>
		);
	}
}

export default Dopeness;
