var React = require('react');

var DuberexForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="search" ref="location" placeholder="Search products by Zip Code"/>
            <button className="button expanded hollow">Get Products</button>
          </form>
        </div>
    );
  }
});

module.exports = DuberexForm;
