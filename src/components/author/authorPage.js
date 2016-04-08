"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');
var toastr = require('toastr');

var AuthorPage = React.createClass({
	getInitialState: function() {
		return {
			authors: AuthorStore.getAllAuthors()
		};
	},

	componentWillMount: function() {
		AuthorStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		AuthorStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({
			authors: AuthorStore.getAllAuthors()
		});
	},

	deleteAuthor: function(id, event) {
		event.preventDefault();
		AuthorActions.deleteAuthor(id);
		toastr.success('Author Deleted');
  },

	render: function() {
		return (
			<div>
				<h1>Authors</h1>
				<Link to="addAuthor" className="btn btn-default">Add Author</Link>
				<AuthorList authors={this.state.authors} deleteAuthor={this.deleteAuthor} />
			</div>
		);
	}
});

module.exports = AuthorPage;
