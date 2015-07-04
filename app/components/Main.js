var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Main=React.createClass({
	render:function(){
		var tmp={marginTop:15};
		return(
			<div className="main-container">
				<nav className="navbar navbar-default" role="navigation">
					<div className="col-sm-7 col-sm-offset-2" style={tmp}>
						Menu
					</div>
				</nav>
				<div className="container">
					<RouteHandler />
				</div>
			</div>
		);
	}
});

module.exports=Main;