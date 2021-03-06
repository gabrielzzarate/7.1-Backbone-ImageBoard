
var Backbone = require('backbone');


var Image = Backbone.Model.extend({
  defaults: {
    name: '',
    url: '',
    caption: ''
  }
});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/zarateimages/'
});


module.exports = {
  'Image': Image,
  'ImageCollection': ImageCollection
};
