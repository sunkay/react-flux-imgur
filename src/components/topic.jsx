var React = require('react');
var PropTypes = React.PropTypes;
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var ImagePreview = require('./image-preview');
var Link = ReactRouter.Link;


var Topic = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],

  getInitialState: function() {
    return {
      images: []
    };
  },

  componentWillMount: function() {
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps) {
    Actions.getImages(nextProps.params.id);
  },

  render: function() {
    return(
      <div className="topic">
        {this.renderImages()}
      </div>
    )
  },

  renderImages: function(){
    return this.state.images.slice(0,20).map(function(image){
      return(
        <ImagePreview key={image.id} {...image} />
      )
    })
  },

  onChange: function(event, images){
    this.setState({
      images: images
    });
  }

});

module.exports = Topic;
