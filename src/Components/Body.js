import ResCard from "./ResCard";
import data from "../utils/data";

const Body = () => {
  const ResList =
    data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
  return (
    <div className="body">
      <div className="search">
        <input type="text" id="search-bar" />
        <button id="search-btn">Search</button>
      </div>
      <div className="res-container">
        {ResList.map((resObj) => (
          <ResCard key={resObj.info.id} resData={resObj.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
