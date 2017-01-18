Duberix API Test 

End Points 
-----------
1. . Retailer products search
GET `https://www.duberex.com/vendors/<retailer-id>/search.json`

https://admin.duberex.com/vendors/748abe3e-fccf-4265-8b87-a5f2d73c52ae/search.json?auto_off=web_online&categories%5B%5D=Flowers%25&include_subcategory=false&limit=50&metadata=1&offset=0&order_by=display_name&sort_order=asc&web_online=true

2. Geolocated Product Search
GET `/products/geo_search.json`
 https://admin.duberex.com/products/geo_search.json?gps[]=49.2710409&gps[]=-%20123.1364952&searchText=zoot

3. List of all retailers in the state of Washington
 https://admin.duberex.com/retailers.json?state=WA
