var React = require('react');
var Reflux = require('reflux');
var CommentStore = require('../stores/comment-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var PropTypes = React.PropTypes;

var CommentList = React.createClass({
  mixins: [
      Reflux.listenTo(CommentStore, 'onChange')
  ],

  getInitialState: function(){
    return {
      comments: []
    }
  },

  componentWillMount: function() {
    Actions.getComments(this.props.id);
  },

  render: function() {
    return (
      <div className="comment list-group">
        {this.renderComments()}
      </div>
    );
  },

  renderComments: function(){
    return this.state.comments.map(function(comment){
      return (
        <Link
          to={"comment/"+comment.id}
          className="list-group-item"
          key={comment.id}>
          <p>{comment.comment} - {comment.author}</p>
        </Link>
      )
    });
  },

  onChange: function(event, comments){
    this.setState({comments: comments});
  }

});

module.exports = CommentList;
