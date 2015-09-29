var Api = require('../utils/Api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],

  getComments: function(imageId){
    return Api.get('gallery/'+imageId+'/comments')
      .then(function(json){
        this.comments = json.data
        this.triggerChange();
      }.bind(this));
  },

  triggerChange: function(){
    this.trigger('change', this.comments);
  }

});
