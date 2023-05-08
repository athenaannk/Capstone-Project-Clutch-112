//need access to kroger api
//need to request auth url
//need to refresh token to get new access token after access token in use expires after 30
//search
//need to pull data from api by product name
//and location id then figure out how to get prices
//will likely need to set limits
//need to map over product name, id, price, possible picture - and promo price
//display product and pricing information
//display store information


import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const clientId = `athenakostrocapstone-aed18c45fc8b908187dd767a9654ad2c1244451021264934315`;
const clientSecret = `dvVZYbEPMsW4WnLFp23Eu3ba7TRdFHjGz-ormM8p`;

const params = new URLSearchParams(window.location.search); //because of application/x-www-form-urlencoded 

// Get the value of a specific parameter

const SaleSearch = () => {
  const [ingredient, setIngredient] = useState('');
  const [prices, setPrices] = useState([]);

  const handleInputChange = (event) => {
    setIngredient(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //get token
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
      
      //seach for the products
      const getProducts = async (token) => {
        const result = await fetch(
          `https://api.kroger.com/v1/products?filter.term=${ingredient}&filter.locationId=24210`,
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

      //display products
      const loadProduct = async () => {
        let token = `eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJhdGhlbmFrb3N0cm9jYXBzdG9uZS1hZWQxOGM0NWZjOGI5MDgxODdkZDc2N2E5NjU0YWQyYzEyNDQ0NTEwMjEyNjQ5MzQzMTUiLCJleHAiOjE2ODM1Nzc0OTUsImlhdCI6MTY4MzU3NTY5MCwiaXNzIjoiYXBpLmtyb2dlci5jb20iLCJzdWIiOiJkMmQyZTY3Ni04NWYyLTU0ZmYtYjM0Ny04NDIxNDkzY2JlNmUiLCJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTY4MzU3NTY5NTE1MzUxNzI0MCwiYXpwIjoiYXRoZW5ha29zdHJvY2Fwc3RvbmUtYWVkMThjNDVmYzhiOTA4MTg3ZGQ3NjdhOTY1NGFkMmMxMjQ0NDUxMDIxMjY0OTM0MzE1In0.Ie8TY5BTe_e8P2vthcUReRGb7J0yjhOu7GuQ4obsHEJ7uGs-kREPQhqHAA6ECT_Cv5bry5xbu9SjqWRNDHt3Df6fNRj_-0oQ_FzTXKHlRQ6WZr7CGXtA5gw3slsdESpbPA7toJ64txdl6Wj7OTQIygzgAUHODeAjsPEAPajoTxxzqFY-T-sojIBU6snpD0nihS_-AL4-tERJYu2RyxdPwSrbupYRvZqQ4X1D2uHcDwnbXUtmwJJbPdJ--5xw59udWjsLT029u972-3tsK3E2R0VhfLG2x3wy6be682uurL_xj4oAG65UGTjlrCKTgJ3z7CmdBkhgcBlF3lcxCP3aEg`; // await getToken();
        ingredient = await getProducts(token);
      };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Enter an ingredient to search for pricing:</Form.Label>
        <Form.Control type="text" placeholder="e.g. bananas" value={ingredient} onChange={handleInputChange} />
      </Form.Group>
      <Button variant="primary" type="submit">Search</Button>
      {prices.length > 0 &&
        <div>
          <h2>Prices for {ingredient}:</h2>
          <ul>
            {prices.map(price => (
              <li key={price.id}>{price.description}: ${price.items[0].price}</li>
            ))}
          </ul>
        </div>
        
      }
    </Form>
  );
};
}
export default SaleSearch;

