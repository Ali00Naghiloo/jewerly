import Logo from "../Assets/Logo.png";
import footerLogo1 from "../Assets/image 2.png";
import footerLogo2 from "../Assets/image 3.png";

const Footer = () => {
  return (
    <div className="continer-5">
      <div className="title-continer">
        <div className="title-footer">
          <img src={Logo} className="Logo-footer" alt="" /> لذت یه خرید ساده{" "}
        </div>
        <span>hello</span>
        <span>hello</span>
        <span>hello</span>
      </div>
      <div className="footer-text">
        <span>خانه</span>
        <span>پرسش های متداول</span>
        <span>گزارش باگ</span>
        <span>فروشگاه</span>
        <span>رویه بازگرداندن کالا</span>
        <span>سبد خرید</span>
        <span>شرایط استفاده</span>
        <span>تماس با ما</span>
        <span>حریم خصوصی</span>
        <section>
          <img src={footerLogo1} alt="" />
          <img src={footerLogo2} alt="" />
          <img src={footerLogo2} alt="" />
        </section>
      </div>
      <div className="footer-addres-number">
        <span style={{ marginLeft: "50%" }}>
          <img src="" alt="" /> تهران، بلوار مرزداران، خیابان سرسبز جنوبی،کوچه
          اول، سمت چپ، در صورتی{" "}
        </span>
        <span> شماره تماس 021-25934555 </span>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "50%",
          fontFamily: "Dana-Hairline",
          fontSize: "1.5em",
          transform: "translate(-50%)",
          padding: "30px",
        }}
      >
        تمامی حقوق متعلق به ریورب است
      </div>
    </div>
  );
};

export default Footer;
