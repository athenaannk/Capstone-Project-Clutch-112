import { useState } from "react";

const clientId = `gurlalproductapp-375c7d498f29ae3300b39631b7729a074370341782217559532`;
const clientSecret = `5xs8b7IBmkiiA10SKaTfk5logSqiA9TJ7iMY3cjX`;

let _stores = [];
let token = ``;
const SaleSearch = () => {
    const [zipCode, setZipCode] = useState('');

const getToken = async () => {
    const response = await fetch("https://api.kroger.com/v1/connect/oauth2/token?grant_type=client_credentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
    });
  
    const data = await response.json();
  
    if (response.ok) {
      const accessToken = data.access_token;
      return accessToken;
    } else {
      console.error(`Failed to get access token: ${data.error_description}`);
    }
  };


const getStores = async (token) => {
  const result = await fetch(
    "https://api.kroger.com/v1/locations?filter.limit=99",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    }
  );

  const response = await result.json();
  return response.data;
};

const loadStores = async () => {
  token = await getToken();
  _stores = await getStores(token);
};

const renderStores = (filterTerm) => {
  let source = _stores;

  if (filterTerm) {
    const term = filterTerm.toLowerCase();
    source = source.filter(({ name }) => {
      return name.toLowerCase().includes(term);
    });
  }

  const list = document.getElementById(`stores`);
  const html = source.reduce(
    (
      acc,
      {
        locationId,
        name,
        phone,
        address: { addressLine1, city, state, zipCode, county },
        hours: {
          sunday,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
        },
      }
    ) => {
      return (
        acc +
        `   
   <div class="card" onclick="getStoreProducts(\'${locationId}\')">
		<div class="store-info">
			<h2>${name}</h2>
      <p>${addressLine1}, ${city}, ${state} ${county} ${zipCode}</p>
			<p>Phone: ${phone}</p>
			<p>Opening Hours:</p>
			<ul>
      <li>Monday: ${monday.open} AM - ${monday.close} PM</li>
      <li>Tuesday: ${tuesday.open} AM - ${tuesday.close} PM</li>
      <li>Wednesday: ${wednesday.open} AM - ${wednesday.close} PM</li>
      <li>Thursday: ${thursday.open} AM - ${thursday.close} PM</li>
      <li>Friday: ${friday.open} AM - ${friday.close} PM</li>
      <li>Saturday: ${saturday.open} AM - ${saturday.close} PM</li>
      <li>Sunday: ${sunday.open} AM - ${sunday.close} PM</li>
			</ul>
		</div>
	</div>
   `
      );
    },

  );

};

loadStores().then(renderStores);

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.term.value;
  renderStores(term);
};

const onReset = () => {
  renderStores();
};

const getStoreProducts = (locationId) => {
  window.location.assign(`/products.html?locationId=${locationId}`);
};
const handleZipCodeSubmit = async (e) => {
    e.preventDefault();
}
const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

return (
    <div>
      <form onSubmit={handleZipCodeSubmit}>
        <label>
          Enter your zip code to find the closest Kroger location:
          <input type="text" value={zipCode} onChange={handleZipCodeChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      </div>)
}
export default SaleSearch