import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../Assets/Logo.png";

const Navigation = () => {
  return (
    <div className="continer">
      <img className="Logo" src={Logo} alt="" />
      <span>خانه</span>
      <span>فروشگاه</span>
      <span>سبد خرید</span>
      <span>تماس با ما</span>
      <button className="lan">En</button>
    </div>
  );
};

export default Navigation;
