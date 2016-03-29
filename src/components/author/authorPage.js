"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
	getInitialState: function() {
		return {
			authors: []
		};
	},

	componentWillMount: function() {
		this.setState({
			authors: AuthorApi.getAllAuthors()
		});
	},
	
	_createAuthorRow: function(author) {
		return (
			<tr key={author.id}>
				<td><a href={"/#authors/" + author.id}>{author.id}</a></td>
				<td>{author.firstName} {author.lastName} </td> 
			</tr>
		);	
	},

	render: function() {
		return (
			<div>
				<h1>Authors</h1>

				<table className="table">
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.state.authors.map(this._createAuthorRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = Authors;
