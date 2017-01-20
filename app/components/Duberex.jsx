var React = require('react');
var DuberexForm = require('DuberexForm');
var DuberexMessage = require('DuberexMessage');
var ErrorModal = require('ErrorModal');
var duberex = require('duberex');

var Duberex = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      products:undefined
    }
  },
  handleSearch: function (location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    duberex.getTemp(location).then(function (temp) {

    that.handleProducts(temp);

      that.setState({
        location: temp,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  handleProducts(temp){
    var that = this;
        duberex.getProduct(temp).then(function (data) {
        
          var within20km =[],
              within50d =[];
           data.map(function(item){
          var dist = item.distance;
          if (dist < 20){
          within20km.push(item.products);
          }
        });
        within20km[0].map(function(item){
           
          var price = item.price
          if (price < 50){
            within50d.push(item);
          }
          });
           that.setState({products:within50d});
        });

  },
  componentDidMount: function () {
    var location = this.props.location.query.location;


    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, temp, location, products, errorMessage} = this.state;
    console.log(" products x ", products );

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching Products...</h3>;
      } else if (products) {
        return <DuberexMessage  products={products}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <div>
        <h1 className="text-center page-title">Get Products</h1>
        <DuberexForm onSearch={this.handleSearch}/>
        </div>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Duberex;
