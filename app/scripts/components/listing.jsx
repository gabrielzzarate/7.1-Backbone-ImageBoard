
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');
//local
var models = require('../models/image.js');


var ImageItem = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function (){
    return (
    	<div className= "thumbnail">
    		<p className="image-title text-center">{this.props.model.get("name")}</p>
    		<img className="image" src={this.props.model.get("url")} />

    		<div className="image-caption">
    			<p className="caption text-center">{this.props.model.get('caption')}</p>
    		</div>
    	</div>
     )
  	}
});

var ImageList = React.createClass({
	mixins: [Backbone.React.Component.mixin],
	render: function(){
		var list = this.props.collection.map(function(model){
			return (
					<ImageItem
						model={model}
						key={model.get('name')}
					/>
				);

		});
		return (
			<div className ="col-md-8 col-md-offset-2 image-list">
				{list}
			</div>

			)
	}

});

module.exports = {
	"ImageItem": ImageItem,
	"ImageList": ImageList

};


