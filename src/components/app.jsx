// App.js
import React, { useState } from "react";
import Header from "./header";
import Card from "./card";
import Footer from "./footer";
import Search from "./search";
import axios from "axios";

function App() {
  const [item, setItem] = useState([]);

  const fetchData = async (searchQuery) => {
    try {
      const response1 = await axios.get(`http://localhost:3001/?q=${searchQuery}`);
      const response2 = await axios.get(`http://localhost:3002/?q=${searchQuery}`);
      const data1 = response1.data; // Assuming the API response structure
      const data2= response2.data;
      setItem([...data1, ...data2]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div>
        <header>
          <h4 className="Search">
            <Header />
            <Search onclicked={fetchData} />
          </h4>
        </header>
      </div>
      <div className="container">
        {item.map((item, i) => (
          <Card
            className="card"
            key={i}
            name={item.pname}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
