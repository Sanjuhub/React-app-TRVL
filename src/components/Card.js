import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

function Card() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon forest."
              labels="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise."
              labels="Luxury"
              path="/services"
            />
          </ul>

          <ul className="cards__items  ">
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Dessert on a guided camel tour."
              labels="Adventure"
              path="/services"
            />

            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters."
              labels="Mystry"
              path="/services"
            />

            <CardItem
              src="images/img-4.jpg"
              text="Exprience Football on Top of the Himlayan Mountains"
              labels="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
