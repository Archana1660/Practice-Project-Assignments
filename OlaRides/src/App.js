import React from "react";
//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/header";
import Sections from "./components/Sections/sections";
import auto from "./assets/auto.jpg";
import micro from "./assets/micro.jpg";
import share from "./assets/share.png";
import firstDriver from './assets/driver.png';

function App() {
  const rideData = [
    {
      vehicleType: auto,
      vehicleTypeName: `Auto`,
      rideData: "123456",
      CRN: "654321",
      pickUpAddress: "1st Block, Kormangala",
      dropAddress: "Forum Mall, Kormangala",
      fare: `₹0`,
      driverProfile: firstDriver,
      isCancelled: true
    },

    {
      vehicleType: micro,
      vehicleTypeName: `Micro`,
      rideData: "7891011",
      CRN: "1110987",
      pickUpAddress: "MG, Road",
      dropAddress: "Park Square, ITPL",
      fare: `₹170`,
      driverProfile: firstDriver,
      isCancelled: false
    },

    {
      vehicleType: share,
      vehicleTypeName: `Share`,
      rideData: "12131415",
      CRN: "15141312",
      pickUpAddress: "Manyata Tech Park",
      dropAddress: "Elements Mall",
      fare: `₹0`,
      driverProfile: firstDriver,
      isCancelled: true
    },

    {
      vehicleType: auto,
      vehicleTypeName: `Auto`,
      rideData: "16171819",
      CRN: "19181716",
      pickUpAddress: "Kemfort Mall",
      dropAddress: "Marathalli Bridge",
      fare: `₹250`,
      driverProfile: firstDriver,
      isCancelled: false
    }


  ];
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <Header />
          
            <Sections rideData={rideData} />
          
        </div>
      </div>
    </div>
  );
}

export default App;
