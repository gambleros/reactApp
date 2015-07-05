// var React   	 = require('react'),
// 	RouteHandler = require('react-router').RouteHandler,
// 	SearchGithub = require('./SearchGithub');
import React from 'react';
import {RouteHandler} from 'react-router';
import SearchGithub from './SearchGithub';

export default class Main extends React.Component {
	render() {
		var tmp={marginTop:15};
		return(
			<div className="main-container">
				<nav className="navbar navbar-default" role="navigation">
					<div className="col-sm-7 col-sm-offset-2" style={tmp}>
						<SearchGithub />
					</div>
				</nav>
				<div className="container">
					<RouteHandler {...this.props}/>
				</div>
			</div>
		);
	}
};

// var Main=React.createClass({
// 	render:function(){
// 		var tmp={marginTop:15};
// 		return(
// 			<div className="main-container">
// 				<nav className="navbar navbar-default" role="navigation">
// 					<div className="col-sm-7 col-sm-offset-2" style={tmp}>
// 						<SearchGithub />
// 					</div>
// 				</nav>
// 				<div className="container">
// 					<RouteHandler />
// 				</div>
// 			</div>
// 		);
// 	}
// });

// module.exports=Main;