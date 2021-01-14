import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "../App.css";
import { db } from "../firebase";
import MyImg from '../produkt.png';

const Contact = () => {


  //start animation ved tryk af knap




  //ændre her data der bliver sendt til firebase
  var data = 14;

  const handleSubmit = (e) => {
    e.preventDefault();




    var ref = db.ref("/cover");  //vores firebase Database som vi forbinder til.

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

    //  const element = <h1>Hello, world</h1>;
    //  ReactDOM.render(element, document.getElementsByClassName('animateb'));

  };

  //   $('animateb').on('click',function(e){ // click the link
  //     e.preventDefault(); // stop the default immediate redirect
  //     $(this).addClass('animate'); // add the animation class

  // });
  //$(function () {
   // $(".form").on("click", function () {
      //sæt kode hernede
    //    alert("HEJ MEISN")
   // });
    

  //});

  const [wobble, setWobble] = React.useState(0)

  return (
    <div className="btndiv" >

      <div className="animate">
        <img className={"imgcirkle"}
          src={MyImg}
          
      
      alt="randomised!"
      
      onAnimationEnd={() => setWobble(0)}
      wobble={wobble}
        />
      </div>´


      <form className="form" onSubmit={handleSubmit}>


        <button className="animateb" onClick={() => setWobble(1)}

          type="submit"

        >

          <p>Rotate Products</p>
        </button>
      </form>
    </div>

  );


};

export default Contact;