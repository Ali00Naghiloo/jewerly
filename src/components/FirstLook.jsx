import banner from "../Assets/ren0001 3.png";
import pic1 from "../Assets/wwu/image 667.png";
import pic2 from "../Assets/wwu/image 666.png";
import pic3 from "../Assets/wwu/image 664.png";
import pic4 from "../Assets/wwu/image 670.png";
import pic5 from "../Assets/wwu/image 669.png";
import "./style.css";

const Firstlook = () => {
  return (
    <div className="continer-1">
      <img className="banner" src={banner} alt="" />
      <h1 className="title-top">
        جدیدترین <span className="title-top1">جواهرات</span>
      </h1>
      <h1 className="title-top2">جهان در دستان شما</h1>
      <div className="text-top">
        <h5>
          من خسته ام از این همه تاوان جدایی، ای بی خبر از حال من امروز کجایی؟؟!
        </h5>
        <h5>
          از عشق شده باور من درد کشیدن، گیرم همه آینده من پاک شد از تو با خاطره
          های تو چه باید بکنم من؟
        </h5>
      </div>
      <button className="shop-btn">خرید از فروشگاه</button>
      <button className="call-us-btn">تماس با ما</button>
      <div className="wwu">
        <span>همکاران ما:</span>
      </div>
      <div className="wwu-pics">
        <img src={pic1} alt="" />
        <img src={pic1} alt="" />
        <img src={pic1} alt="" />
        <img src={pic1} alt="" />
        <img src={pic1} alt="" />
      </div>
      <a href="#hello" className="scroll-btn">
        <a href="#hello" className="scroll-this"></a>
      </a>
    </div>
  );
};

export default Firstlook;
