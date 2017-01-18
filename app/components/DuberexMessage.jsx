var React = require('react');

var DuberexMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It's it {temp} in {location}.</h3>
  )
};

module.exports = DuberexMessage;
