/** @jsx React.DOM */

//Views
var ListView = require('./listView').ListView;
var PostView = require('./postView').PostView;

var Layout = React.createClass({displayName: 'Layout',

	getInitialState: function() {
		return {
			selectedUrl: ''
		}
	},

	handleSelectPost: function(comments, content) {
		this.setState({
			selectedUrl: comments
		});
	},

	render: function() {
		return (
			React.DOM.div(null, 
				Header(null ),
				ListView( {handleSelectPost:this.handleSelectPost} ),
				PostView( {url:this.state.selectedUrl} )
			)
		);
	}
});

var Header = React.createClass({displayName: 'Header',
	render: function() {
		return (
			React.DOM.div( {className:"header"}, 
				" HNReact "
			)
		)
	}
});

exports.renderApp = function(container) {
	React.renderComponent(
		Layout(null ),
		container
	)
};