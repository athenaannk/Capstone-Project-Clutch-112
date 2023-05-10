import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Navbar from "./Navbar";
import Carousel from './Carousel';


const clientId = `athenakostrocapstone-aed18c45fc8b908187dd767a9654ad2c1244451021264934315`;
const clientSecret = `bmAOj8J2KtrToThHNFQ0kv605EQwHlmBQIBe7tTz`;

const params = new URLSearchParams(window.location.search); //because of application/x-www-form-urlencoded 

// Get the value of a specific parameter

const SaleSearch = () => {
  const [ingredient, setIngredient] = useState('');
  const [prices, setPrices] = useState([]);

  const handleInputChange = (event) => {
    setIngredient(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();



    //search for the products
    const getProducts = async (token) => {
      const result = await fetch(
        `https://api.kroger.com/v1/products?filter.locationId=01400943&filter.term=${ingredient}&filter.limit=3`,
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
      let token = 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJhdGhlbmFrb3N0cm9jYXBzdG9uZS1hZWQxOGM0NWZjOGI5MDgxODdkZDc2N2E5NjU0YWQyYzEyNDQ0NTEwMjEyNjQ5MzQzMTUiLCJleHAiOjE2ODM3NDMyMjUsImlhdCI6MTY4Mzc0MTQyMCwiaXNzIjoiYXBpLmtyb2dlci5jb20iLCJzdWIiOiJkMmQyZTY3Ni04NWYyLTU0ZmYtYjM0Ny04NDIxNDkzY2JlNmUiLCJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTY4Mzc0MTQyNTMyNjY1NTQwMywiYXpwIjoiYXRoZW5ha29zdHJvY2Fwc3RvbmUtYWVkMThjNDVmYzhiOTA4MTg3ZGQ3NjdhOTY1NGFkMmMxMjQ0NDUxMDIxMjY0OTM0MzE1In0.JQQnuI1M7hk1AVMQeY_xlo-4pEp85FL_gGhT5RZEkkzjEO5eNR3pKHn0g2eshqRorcKV1OZgaYdqCVS5BcIinaBUrkawE0_oTXWP_hQEwyddUZdAVs2x9paA2GLAl8lSziAG3yl9DYDIyqnQsq7eCmP1XQvw4RRNZG3ZOQBcGPVSYtRIkGWSTlkMyuWfQp9UFUSrijI3wtF2UTNxJtd8UDZoS_oL8NteBvUzM1wNbPZ-9WaMdyyM0CMKaTfZ694h2K6mVlzN-Sc8q4rPFni8unOOQ6MYioQGnHXQhF4a4eWPlV49Gl91WzHNJ9SGf0iGCkLdvwX5vsGehF_nan63GA'
      let products = await getProducts(token);
      setPrices(products);
    };

    await loadProduct();
  };

  return (
     
    <div className='home-container'>
      <div className="home-container">
   <Navbar/>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className='primary-heading'>Enter an ingredient to search for pricing at your local Kroger:</Form.Label>
          <Form.Control type="text" placeholder="e.g. bananas" value={ingredient} onChange={handleInputChange} />
          {prices && prices.length > 0 && 
          
            <div>
              <h2 className="primary-text">Prices for {ingredient}</h2>
              <ul className='pricelist'>
                {prices.map((product) => (
                  <li key={product.productId}>
                    {product.description} - {product.items[0].price.regular}
                  </li>
                ))}
              </ul>
              
            </div>
          }
        </Form.Group>
        <Button className="secondary-button3"  type="submit">Search</Button>
      </Form>
    </div>
   <div className="col-6">
   <Carousel/>
   </div>
    </div>
    
  );
  

  
};

export default SaleSearch;
