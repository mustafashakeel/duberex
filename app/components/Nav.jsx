var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
      e.preventDefault();

      var location = this.refs.search.value;
      var encodedLocation = encodeURIComponent(location);

      if (location.length > 0) {
        this.refs.search.value = '';
        window.location.hash = '#/?location=' + encodedLocation;
      }
  },
  dropDown:function(){
    $(".myMenu").toggle();
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Duberex</li>
            
          </ul>
        </div>

        <div className="top-bar-right rightMenu">
          <form onSubmit={this.onSearch}>
          <ul className=" menu ">
           <li>
                <input type="search" placeholder="Enter Zip code to Search" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button getProducts" value="Get Products"/>
              </li>
              </ul>
            </form>
              <ul className="menu">
          <li><a id="clickmenu" onClick={this.dropDown}><img src="http://f.cl.ly/items/1U2c3b1215383h3a2T2r/icon-menu.svg" /></a>
              <ul className="vertical menu dropdown myMenu">
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Search</IndexLink>
              </li>
              <li>
                <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact</Link>
              </li>
              
            </ul>
            </li>
            </ul>
          
        </div>
      </div>
    );
  }
});

module.exports = Nav;
