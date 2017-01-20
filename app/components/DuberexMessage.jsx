

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
		console.log("price ",price);



		lis.push(<div key={i}><div className="row"><div className="large-10 columns">
			<div className="card"><div className="column large-4"><img src={pic} /></div>
			<span className="column large-8">{name}</span><span className="subheader">Price : {price}</span>
	
			</div></div></div></div>);
			

	}

	return (<div>
	{lis} 
	</div>);


	}
});

module.exports = DuberexMessage;
