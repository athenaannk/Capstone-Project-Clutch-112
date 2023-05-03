var client_id = "capstonepennilesspantry-ff0383e3f11e521004ddaa7176a8c0996671906403759462627";
var client_secret = "H1G1QzQb2LYBNG3HxjmBajjzJBZRMnlFyhjYwL7U";

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/products/{{ID}}?filter.locationId={{LOCATION_ID}}",
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Authorization": "Bearer {{TOKEN}}"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  
  // Creates location request and display returned data on click
async function locationOnClick() {
    let zipCode = document.getElementById("locationSearchZipCode").value;
    const locations = await getLocations(zipCode);
    displayLocations(locations);
  }
  
  async function getLocations(zipCode) {
    // Use stored access token for location request
    let accessToken = authentication.getAccessToken();
    // Build location URL
    // Base URL (https://api.kroger.com)
    // Version/Endpoint (/v1/locations)
    // Query String (?filter.zipCode.near=term)
    let locationUrl = `${
      config.apiBaseUrl
    }/v1/locations?filter.zipCode.near=${zipCode}`;
    // Location request body
    let locationResponse = await fetch(locationUrl, {
      method: "GET",
      cache: "no-cache",
      headers: {
        Authorization: `bearer ${accessToken}`,
        "Content-Type": "application/json; charset=utf-8"
      }
    });
    // Return JSON object
    return locationResponse.json();
  }


  async function setLocationOnClick(event) {
    // store the locationId
    localStorage.setItem("locationId", event.target.value);
  }
  
  // Clear the locationId when the user Signs Out of the application
  async function clearLocation() {
    localStorage.removeItem("locationId");
  }




  // Product request
async function getProducts(term) {
    // Use access stored access token for product request
    let accessToken = authentication.getAccessToken();
    // Use stored locationId
    let locationId = localStorage.getItem("locationId");
  
    // Use locationId as filter (if) selected by user
    let searchByLocation = "";
    if (locationId) {
      searchByLocation = `filter.locationId=${locationId}&`;
    }
    // Building product URL
    // Base URL (https://api.kroger.com)
    // Version/Endpoint (/v1/products)
    // Query String (?filter.locationId=${locationId}&filter.term=${term})
    let productsUrl = `${
      config.apiBaseUrl
    }/v1/products?${searchByLocation}filter.term=${term}`;
  
    // Product request body
    let productsResponse = await fetch(productsUrl, {
      method: "GET",
      cache: "no-cache",
      headers: {
        Authorization: `bearer ${accessToken}`,
        "Content-Type": "application/json; charset=utf-8"
      }
    });
  
    // Return json object
    return productsResponse.json();
  }