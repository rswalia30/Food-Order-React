import { CARD_CDN } from "../utils/constants";

const ResCard = (props) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    props.resData; // Destructuring Object on the fly
  return (
    <div className="res-card">
      <img id="res-img" src={CARD_CDN + cloudinaryImageId} alt="res-img" />
      <h3>{name}</h3>
      <span>{avgRating} stars</span>
      <span>{sla.slaString}</span>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default ResCard;
