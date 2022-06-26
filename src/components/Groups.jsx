import banner from "../Assets/ren0001 3.png";
import "./style.css";

const Groups = () => {
  return (
    <div id="hello" className="continer-2">
      <div className="titles">
        <span className="group">دسته بندی ها</span>
        <span className="see-all" style={{color: "#D5B676"}} >مشاهده همه</span>
      </div>
      <div style={{ display: "flex" }}>
        <div className="group-items">
          <img src={banner} alt="" />
          <span className="group-name">انگشتر ها</span>
          <span className="group-number">+1000</span>
        </div>
        <div className="group-items">
          <img src={banner} alt="" />
          <span className="group-name">گردنبند ها</span>
          <span className="group-number">+1000</span>
        </div>
        <div className="group-items">
          <img src={banner} alt="" />
          <span className="group-name">گوشواره ها</span>
          <span className="group-number">+1000</span>
        </div>
        <div style={{ border: "none" }} className="group-items">
          <img src={banner} alt="" />
          <span className="group-name">ست ها</span>
          <span className="group-number">+1000</span>
        </div>
      </div>
    </div>
  );
};

export default Groups;
