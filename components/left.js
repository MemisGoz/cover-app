import React, { useState, } from "react";
import "../App.css";
import { db } from "../firebase";
const Left = () => {

  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  //ændre her
  var data = 16;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);


    var ref = db.ref("/coverLeft");  //Set the current directory you are working in

    /**
    * Setting Data Object Value
    */
    ref.push({
      pris: data,
      Timestamp: new Date().getTime()
    });

    /**
    * Pushing New Value
    * in the Database Object
    */



  };

  return (
    <form className="form" onSubmit={handleSubmit}>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Wacth Products
      </button>
    </form>
  );

};


export default Left;