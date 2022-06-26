import banner from "../Assets/ren0001 3.png";
import "./style.css";

const Products = () => {
  return (
    <div className="continer-3">
      <div className="titles">
        <span className="group">محصولات</span>
        <span className="see-all" style={{color: "#D5B676"}} >مشاهده همه </span>
      </div>
      <div style={{display: "flex"}}>
        <div className="product">
          <img src={banner} alt="" />
          <span style={{ color: "#D5B676", fontSize: "3em", marginTop: "2em" }}>
            حلقه الماس
          </span>
          <span style={{ fontSize: "1.5em", marginTop: "1em" }}>
            ساخت المان
          </span>
        </div>
        <div className="product">
          <img src={banner} alt="" />
          <span style={{ color: "#D5B676", fontSize: "3em", marginTop: "2em" }}>
            حلقه الماس
          </span>
          <span style={{ fontSize: "1.5em", marginTop: "1em" }}>
            ساخت المان
          </span>
        </div>
        <div className="product">
          <img src={banner} alt="" />
          <span style={{ color: "#D5B676", fontSize: "3em", marginTop: "2em" }}>
            حلقه الماس
          </span>
          <span style={{ fontSize: "1.5em", marginTop: "1em" }}>
            ساخت المان
          </span>
        </div>
      </div>
    </div>
  );
};

export default Products;
