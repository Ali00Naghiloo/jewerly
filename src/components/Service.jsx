import banner from "../Assets/ren0001 3.png";
import "./style.css";

const Sevice = () => {
  return (
    <div className="continer-4">
      <div className="titles">
        <span className="group">خدمات</span>
      </div>
      <div className="service-item">
        <div className="service">
          <img src={banner} alt="" />
          <span>تنوع محصولات</span>
        </div>
        <div className="service">
          <img src={banner} alt="" />
          <span>ارسال رایگان</span>
        </div>
        <div style={{border: "none"}} className="service">
          <img src={banner} alt="" />
          <span>امکان بازگشت</span>
        </div>
      </div>
    </div>
  );
};

export default Sevice;
