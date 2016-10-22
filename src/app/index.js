import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";


import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";
import { View } from "./components/View";

import { Attraction } from "./components/Attraction";


class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path={"/"} component={Root} >
					<IndexRoute  component={Home} />
					<Route path={"home"} component={Home} />	
					<Route path={"user"} component={User} />	
					<Route path={"view/:id"} component={View} />	
					<Route path={"attraction"} component={Attraction} />	
				</Route>
				
			</Router>
		);
	}
}




render(<App/>, window.document.getElementById("app"));




