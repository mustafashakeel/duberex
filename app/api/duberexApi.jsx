var axios = require('axios');

const PRODUCTS_GEO_SEARCH = 'https://admin.duberex.com/products/geo_search.json';
const GOOGLE_MAPS_ZIP = 'http://maps.googleapis.com/maps/api/geocode/json';

module.exports = {
  getTemp: function (location) {
    sessionStorage.clear();
    if(location){
      console.log("gettem location ", location);

    }
    var encodedLocation = encodeURIComponent(location);

     if(encodedLocation){
      
    }
    var requestUrl = `${GOOGLE_MAPS_ZIP}?address=${encodedLocation}`;

    if(requestUrl){
      console.log("requestUrl ", requestUrl);
    }


    return axios.get(requestUrl).then(function (res) {

      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {

         var coordinates = res.data.results[0].geometry.location;
        var latitude = coordinates.lat;
        var longitude = coordinates.lng;
          var searchUrl = `${PRODUCTS_GEO_SEARCH}?gps[]=${latitude}&gps[]=${longitude}&searchText=zoot`;
         return axios.get(searchUrl).then(function (res) {

          console.log(" my data",res.data);

          localStorage.setItem("products",res.data);
         });

      //  return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
