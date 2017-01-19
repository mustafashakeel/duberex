var React = require('react');

var DuberexMessage = ({temp, location,products }) => {
	
var html = '';
	if(products){
		console.log("dubermessage ",products);
		for (var i in products ){
			html += '<li>'+products[i].name+ '</li>';
		}
	}

  return (
  	<div>

  	<ul dangerouslySetInnerHTML={{__html: html}}></ul>
  	

  	</div>
  )
};

module.exports = DuberexMessage;
