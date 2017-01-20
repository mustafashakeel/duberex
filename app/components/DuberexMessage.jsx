

var React = require('react');

var DuberexMessage = React.createClass({

	render:function(){
		console.log("props", this.props.products);
		var products = this.props.products;


var lis = [];

	for (var i in products ){
		let pic =	products[i].picture_images.square;
		let name = products[i].name;
		let price = products[i].price;
		let city = products[i].processor.city;
		let category = products[i].category;
		console.log('city',city);



		lis.push(<div key={i}><div className="row"><div className="large-10 columns myCards">
			<div className="card"><div className="column large-4"><img src={pic} /></div>
			<span className="column large-8">{name}</span><span className="subheader">Price : {price}</span>
			<span className="subheader">Category : {category}</span>

			<span className="subheader">City : {city}</span>
			</div></div></div></div>);
			

	}

	return (<div>
	{lis} 
	</div>);


	}
});

module.exports = DuberexMessage;
