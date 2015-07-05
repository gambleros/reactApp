// var React 	  = require('react'),
// 	Router    = require('react-router');
import React from 'react';
// import Router from 'react-router';


export default  class SearchGithub extends React.Component {
	handleSubmit(){
		var router = this.context.router;
		var username=React.findDOMNode(this.refs.username).value;
		React.findDOMNode(this.refs.username).value='';
		router.transitionTo('profile',{username:username});
	}
	render() {
		return(
			<div className="col-sm-12">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group col-sm-7">
						<input type="text" className="form-control" ref="username" />
					</div>
					<div className="form-group col-sm-5">
						<button type="submit" className="btn btn-block btn-primary">Search Github</button>
					</div>
				</form>
			</div>
		);
	}
};
SearchGithub.contextTypes = {
	router: React.PropTypes.func.isRequired
};

// var SearchGithub = React.createClass({
// 	mixins: [Router.Navigation],
// 	handleSubmit: function(){
// 		var username=React.findDOMNode(this.refs.username).value;
// 		React.findDOMNode(this.refs.username).value='';
// 		this.transitionTo('profile',{username:username});
// 	},
// 	render: function(){
// 		return(
// 			<div className="col-sm-12">
// 				<form onSubmit={this.handleSubmit}>
// 					<div className="form-group col-sm-7">
// 						<input type="text" className="form-control" ref="username" />
// 					</div>
// 					<div className="form-group col-sm-5">
// 						<button type="submit" className="btn btn-block btn-primary">Search Github</button>
// 					</div>
// 				</form>
// 			</div>
// 		);
// 	}
// });	

// module.exports = SearchGithub;