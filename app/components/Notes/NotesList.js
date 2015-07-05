// var React = require('react');
import React from 'react';

class NotesList extends React.Component {
	render() {
		var notes= this.props.notes.map((note,index)=>{
			return <li className="list-group-item" key={index}> {note} </li>
		});
		return (
			<ul className="list-group">
				{notes}
			</ul>
		);
	}
};

export default NotesList;

// var NotesList = React.createClass({
// 	render: function(){
// 		var notes= this.props.notes.map(function(note,index){
// 			return <li className="list-group-item" key={index}> {note} </li>
// 		});
// 		return (
// 			<ul className="list-group">
// 				{notes}
// 			</ul>
// 		);
// 	}
// });

// module.exports = NotesList;