import ResCard from "./ResCard";
import data from "../utils/data";
import { useState } from "react";

const Body = () => {
  const ResList =
    data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

  //  Normal JS variable
  let mockList = [
    {
      id: "1003414",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
      locality: "Chhindwara",
      areaName: "Parasia Road",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.5,
    },
    {
      id: "150591",
      name: "Satkar Restaurant",
      cloudinaryImageId: "rvxp5xbniat84r6efku2",
      locality: "Sinchai Colony",
      areaName: "Satkar Chowk",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Indian", "Salads", "Desserts"],
      avgRating: 4.4,
    },
  ];

  // useState Variable
  const [mockList2, setMockList2] = useState(ResList);

  return (
    <div className="body">
      <div className="body-navbar">
        <div className="search">
          <input type="text" id="search-bar" />
          <button id="search-btn">Search</button>
        </div>
        <div className="top-rated">
          <button
            className="top-rated-btn"
            onClick={() => {
              let filteredList = mockList2.filter(
                (obj) => obj.info.avgRating > 4.3
              );
              setMockList2(filteredList);
            }}>
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        {mockList2.map((resObj) => (
          <ResCard key={resObj.info.id} resData={resObj.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
