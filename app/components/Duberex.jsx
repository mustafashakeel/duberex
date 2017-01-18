var React = require('react');
var DuberexForm = require('DuberexForm');
var DuberexMessage = require('DuberexMessage');
var ErrorModal = require('ErrorModal');
var duberex = require('duberex');

var Duberex = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
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
var aa = "";

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
    

    var products =  sessionStorage.getItem("products");
    console.log(" products 123 ",products);

  },
  handleProducts(temp){
    console.log("temp", temp);
        duberex.getProduct(temp).then(function (data) {
          console.log("Big Dataaa",data);
        });

  },
  componentDidMount: function () {
    var location = this.props.location.query.location;


    if (location && location.length > 0) {
          console.log(" location componentdidmount ", location);
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;
    console.log(" location componentWillReceiveProps ",location);
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching Products...</h3>;
      } else if (temp && location) {
        return <DuberexMessage temp={temp} location={location}/>;
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
        <h1 className="text-center page-title">Get Products</h1>
        <DuberexForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Duberex;
