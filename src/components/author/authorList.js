"use strict";

var React = require('react');
var Link = require('react-router').Link;

var AuthorList = React.createClass({

  propTypes: {
    authors: React.PropTypes.array.isRequired,
    deleteAuthor: React.PropTypes.func.isRequired
  },

	_createAuthorRow: function(author) {
		return (
			<tr key={author.id}>
				<td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
				<td>{author.firstName} {author.lastName} </td>
        <td><a href="#" onClick={this.props.deleteAuthor.bind(this, author.id)}>Delete</a></td>
			</tr>
		);
	},

	render: function() {
    return (
      <div>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {this.props.authors.map(this._createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
	}
});

module.exports = AuthorList;
