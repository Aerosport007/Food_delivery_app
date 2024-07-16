
import React from 'react';
import './PopularDishesRibbon.css';


const dishes = [
  {
    id: 1,
    name: "Pizza Margherita",
    description: "Classic cheese and tomato pizza",
    image: "https://media1.agfg.com.au/images/recipes/1550/hero-300.jpg",
  },
  {
    id: 2,
    name: "Loaded Fries",
    description: "Indulge in a plate of golden, crispy fries loaded with melted cheese and other crave worthy fillings ",
    image: "https://cdn-rdb.arla.com/kraft-en/loaded-cheese-fries/1984660106.jpeg?w=1230&h=670&mode=crop&ak=617569bf&hm=a5ba9a24",
  },
  {
    id: 3,
    name: "Burger Deluxe",
    description: "Filling beef Burger that satisfies all your cravings",
    image: "https://as1.ftcdn.net/v2/jpg/07/78/95/12/1000_F_778951274_kOtvymDCpPBfh4anbfQ6Tia3t5yFHSiX.jpg",
  },
  {
    id: 4,
    name: "Daddy Wilson",
    description: "chocolaty concoction of goodness",
    image: "https://thegourmetbonvivant.com/wp-content/uploads/2022/01/chocolate-cake-milkshake-768x1152.png",
  },
  {
    id: 5,
    name: "Willson COMBO",
    description: "Have a heart attack tonight!!!",
    image: "https://media.discordapp.net/attachments/970018117893894165/1257620480823787592/daddywilson.jpg?ex=668511d8&is=6683c058&hm=8fe08dcdea1af316e4cb6e8146802421445ef943dce343c3c92c0e063edfe526&=&format=webp&width=593&height=593",
  },
  // Add more dishes as needed
];

const PopularDishesRibbon = () => {
  return (
    <div className="ribbon-container">
      <h2><u>Popular Dishes</u></h2>
      <div className="ribbon">
        {dishes.map(dish => (
          <div key={dish.id} className="dish-item">
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDishesRibbon;