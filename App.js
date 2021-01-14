import React,{useState} from 'react';
import { RiFacebookCircleFill } from "react-icons/ri";
import Contact from "./components/contact";
import Left from "./components/left";
import "./App.css";
import MyImg from './produkt.png';




function App() {
  const [state,setState]=useState(false);
  let url="http://marcelcph.dk/wordpress/";
  let socialurl="https://www.facebook.com/Zhield-104915588174190";
  
  return (
    <div className="app">
      <div className="fronttext">
        <h1 className="overskrift">Zhield</h1>
        <p className="underskrift" >Interactive product display</p>
        
      </div>
      <div className="front" >
      <Contact />
      </div>
      <a href={url}>
      <div className="order">
        <button className="orderknap">
        
          Order Here
         
        </button>
        
      </div>
      </a>
      <div className="socialmedia">
        <a href={socialurl}>
      <RiFacebookCircleFill />
      </a>
      </div>
      
    </div>
    
  );
}

export default App;