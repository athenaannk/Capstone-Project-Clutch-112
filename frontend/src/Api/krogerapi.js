//need access to kroger api
//need to request auth url
//need to refresh token to get new access token after access token in use expires after 30
//need to pull data from api by product name
//and location id then figure out how to get prices
//will likely need to set limits
//need shopping list to then pull kroger data suggestions for loop?
//then i need to combine both the shopping list and the suggestions for purchase


const clientId = `athenakostrocapstone-aed18c45fc8b908187dd767a9654ad2c1244451021264934315`;
const clientSecret = `dvVZYbEPMsW4WnLFp23Eu3ba7TRdFHjGz-ormM8p`;

const params = new URLSearchParams(window.location.search);

// Get the value of a specific parameter
const locationId = params.get("locationId");
let products = [];
let productName = `Milk`;

//Method to get access token
const getToken = async () => {
  const result = await fetch("https://api.kroger.com/v1/connect/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials,scope:product.compact",
  });

  const data = await result.json();
  return data.access_token;
};

//Method to get the products
const getProducts = async (token) => {
  const result = await fetch(
    `https://api.kroger.com/v1/products?filter.term=${productName}&filter.locationId=${locationId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const response = await result.json();
  return response.data;
};