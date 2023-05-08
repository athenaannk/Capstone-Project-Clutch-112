import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const clientId = `athenakostrocapstone-aed18c45fc8b908187dd767a9654ad2c1244451021264934315`;
const clientSecret = `dvVZYbEPMsW4WnLFp23Eu3ba7TRdFHjGz-ormM8p`;

const params = new URLSearchParams(window.location.search);

// Get the value of a specific parameter
const locationId = params.get("locationId");
let products = [];
let productName = `Milk`;
const SaleSearch = () => {
  const [ingredient, setIngredient] = useState('');
  const [prices, setPrices] = useState([]);

  const handleInputChange = (event) => {
    setIngredient(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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