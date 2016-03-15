var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

//local
var models = require('./models/image.js');
var listComponents = require('./components/listing.jsx');
var formComponents = require('./components/form.jsx');
var navComponent = require('./components/nav.jsx');

var images = new models.ImageCollection();
var ImageList = listComponents.ImageList;
var ImageForm = formComponents.ImageForm;
var NavToggle = navComponent.NavComponent;

console.log(images);
console.log(ImageList);
console.log(ImageForm);





images.fetch().done(function (){
	ReactDOM.render(
		<ImageList collection={images} />,
		$('#imagelist-container')[0]
	);

});

ReactDOM.render(
	<ImageForm collection={images}/>,
	$('#inputform')[0]
);

ReactDOM.render(
	<NavToggle />,
	$('.nav-container')[0]
)






