// var React      	   = require('react'),
// 	Router         = require('react-router'),
// 	Repos          = require('./Github/Repos'),
// 	UserProfile    = require('./Github/UserProfile'),
// 	Notes          = require('./Notes/Notes'),
// 	ReactFireMixin = require('reactfire'),
// 	Firebase       = require('firebase'),
// 	helpers        = require('../utils/helpers');

import React from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import helpers from '../utils/helpers';
import Rebase from 're-base';

var base=Rebase.createClass('https://github-note-taker.firebaseio.com');

export default class Profile extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
			notes: [],
			bio: {},
			repos: []
		};
	 }
	init(){
		this.ref = base.bindToState(this.router.getCurrentParams().username,{
			context: this,
			asArray: true,
			state: 'notes'
		});
		helpers.getGithubInfo(this.router.getCurrentParams().username).
			then((dataObj)=>{
				this.setState({
					bio: dataObj.bio,
					repos: dataObj.repos
				});
			});
	}
	componentWillMount() {
		this.router= this.context.router;
	}
	componentDidMount() {
		this.init();
	}
	componentWillUnmount() {
		base.removeBinding(this.ref);
	}
	componentWillReceiveProps(nextProps) {
		base.removeBinding(this.ref);
		this.init();
	}
	handleAddNote(newNote){
		base.post(this.router.getCurrentParams().username,{
			data: this.state.notes.concat([newNote])
		});
	}
	render() {
		var username=this.router.getCurrentParams().username;
		return(
			<div className="row">
				<div className="col-md-4">
					<UserProfile username={username} bio={this.state.bio} />
				</div>
				<div className="col-md-4">
					<Repos username={username} repos={this.state.repos}/>
				</div>
				<div className="col-md-4">
					<Notes 	username={username} 
							notes={this.state.notes} 
							addNote={this.handleAddNote.bind(this)}/>
				</div>
			</div>
		);
	}
};
Profile.contextTypes={
	router: React.PropTypes.func.isRequired
};

// var Profile = React.createClass({
// 	mixins: [Router.State,ReactFireMixin],
// 	getInitialState() {
// 		return {
// 			notes: ['note1','note2'],
// 			bio: {name:"Aleksandar"},
// 			repos: [1,2,3]
// 		};
// 	},
// 	init: function(){
// 		var childRef=this.ref.child(this.getParams().username);
// 		this.bindAsArray(childRef,'notes');

// 		helpers.getGithubInfo(this.getParams().username).
// 			then(function(dataObj){
// 				this.setState({
// 					bio: dataObj.bio,
// 					repos: dataObj.repos
// 				});
// 			}.bind(this));
// 	},
// 	componentDidMount:function() {
// 		this.ref=new Firebase('https://github-note-taker.firebaseio.com');
// 		this.init();
// 	},
// 	componentWillUnmount:function() {
// 		this.unbind('notes');
// 	},
// 	componentWillReceiveProps:function(nextProps) {
// 		this.unbind('notes');
// 		this.init();
// 	},
// 	handleAddNote: function(newNote){
// 		this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
// 	},
// 	render: function(){
// 		var username=this.getParams().username;
// 		return(
// 			<div className="row">
// 				<div className="col-md-4">
// 					<UserProfile username={username} bio={this.state.bio} />
// 				</div>
// 				<div className="col-md-4">
// 					<Repos username={username} repos={this.state.repos}/>
// 				</div>
// 				<div className="col-md-4">
// 					<Notes 	username={username} 
// 							notes={this.state.notes} 
// 							addNote={this.handleAddNote}/>
// 				</div>
// 			</div>
// 		);
// 	}
// });

// module.exports = Profile;