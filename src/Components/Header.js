import { LOGO_CDN } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img id="logo-img" src={LOGO_CDN} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
