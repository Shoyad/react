import React from "react";
import {Link} from "react-router";

export class Attr extends React.Component {

	constructor() {
		super();

	}

	render() {
		return (
			<div className="col-md-4">
				<img src={this.props.imgLink} />
				<h4>
					<Link to={"view/" + this.props.id}>
						{this.props.title}1111111
					</Link>
				</h4>
			</div>
		);
	}
}
