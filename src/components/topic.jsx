var React = require('react');
var PropTypes = React.PropTypes;

var Topic = React.createClass({

  render: function() {
    return (
      <div>
        I am a topic {this.props.id}!
      </div>
    );
  }

});

module.exports = Topic;
