import React from 'react';
import './App.css';
import officeImage from './office.png'; 
function App() {
  const heading = "Office Space";
  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork", Rent: 75000, Address: "Bangalore" },
    { Name: "Regus", Rent: 45000, Address: "Hyderabad" }
  ];

  return (
    <div className="App">
      <h1>{heading} , at Affordable Range</h1>

      {officeList.map((item, index) => {
        
        const rentColor = item.Rent <= 60000 ? "textRed" : "textGreen";

        return (
          <div key={index}>
            <img src={officeImage} width="25%" height="25%" alt="Office Space" />
            <h1>Name: {item.Name}</h1>
            <h3 className={rentColor}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
