import React from "react";
import {browserHistory} from "react-router";

export class View extends React.Component {

	constructor() {
		super();

	}

	backNavigate() {

		browserHistory.push("/attraction")

	}

	render() {
		

		return (
			<div className="col-md-12">
				{console.log(this.props)}
				<hr/>

				<button className="btn btn-primary" onClick={this.backNavigate}>Go back</button>
			</div>


		);
	}
}
