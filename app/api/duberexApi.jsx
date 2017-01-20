var axios = require('axios');
var React = require('react');

const PRODUCTS_GEO_SEARCH = 'https://admin.duberex.com/products/geo_search.json';
const GOOGLE_MAPS_ZIP = 'http://maps.googleapis.com/maps/api/geocode/json';

module.exports = {
  getTemp: function (location) {
var that = this ;



    sessionStorage.clear();
    if(location){
      console.log("gettem location ", location);

    }
    var encodedLocation = encodeURIComponent(location);

     if(encodedLocation){
      
    }
    var requestUrl = `${GOOGLE_MAPS_ZIP}?address=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {

      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {

        var coordinates = res.data.results[0].geometry.location,
            latitude = coordinates.lat,
            longitude = coordinates.lng,
            searchUrl = `${PRODUCTS_GEO_SEARCH}?gps[]=${latitude}&gps[]=${longitude}&searchText=zoot`;
         return searchUrl;
 
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  },
  getProduct:function(loc){
    return axios.get(loc).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });

  }
}
