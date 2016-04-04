"use strict";

var React = require('react');
var Link = require('react-router').Link;

var AuthorList = React.createClass({

  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

	_createAuthorRow: function(author) {
		return (
			<tr key={author.id}>
				<td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
				<td>{author.firstName} {author.lastName} </td>
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
