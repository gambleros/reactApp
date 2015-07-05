// var React = require('react');
import React from 'react';

class AddNote extends React.Component {
	handleSubmit(){
		var newNote=React.findDOMNode(this.refs.note).value;
		React.findDOMNode(this.refs.note).value='';
		this.props.addNote(newNote);
	}
	render() {
		return(
			<div className="input-group">
				<input type="text" ref="note" className="form-control" placeholder="Add New Note" />
				<span className="input-group-btn">
					<button type="button" className="btn btn-default" onClick={this.handleSubmit.bind(this)}> Submit </button>
				</span>
			</div>
		);
	}
};

AddNote.propTypes={
	username: React.PropTypes.string.isRequired,
	addNote: React.PropTypes.func.isRequired
};
export default AddNote;


// var AddNote = React.createClass({
// 	propTypes: {
// 		username: React.PropTypes.string.isRequired,
// 		addNote: React.PropTypes.func.isRequired
// 	},
// 	handleSubmit: function(){
// 		var newNote=React.findDOMNode(this.refs.note).value;
// 		React.findDOMNode(this.refs.note).value='';
// 		this.props.addNote(newNote);
// 	},
// 	render: function(){
// 		return(
// 			<div className="input-group">
// 				<input type="text" ref="note" className="form-control" placeholder="Add New Note" />
// 				<span className="input-group-btn">
// 					<button type="button" className="btn btn-default" onClick={this.handleSubmit}> Submit </button>
// 				</span>
// 			</div>
// 		);
// 	}
// });

// module.exports = AddNote;