import "./App.css";
import indo from "../src/images/indo.jpg";
import myan from "../src/images/myan.jpg";
import sing from "../src/images/sing.jpg";
import thai from "../src/images/thai.jpg";
import Nav from "../src/component/Nav";
import { MdNavigateNext } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { useRef, useState } from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { CgPlayTrackNextO } from "react-icons/cg";
import { CgPlayTrackPrevO } from "react-icons/cg";
import { CgScrollV } from "react-icons/cg";

function App() {
  const swiperRef = useRef(null);
  const [counter, setcounter] = useState(0);
  const [desti, setdesti] = useState("Indonesia   >>   Myanmar");
  const [trpackage, setTrpackage] = useState(
    "Standard consectetur adipisicing elit Saepe repellendus, similique atque alias beatae enim. Iste a at optio corporis fuga minus culpa quisquam"
  );
  const [price, setPrice] = useState(1386);
  const [active, setActive] = useState("standard");
  const image = [indo, myan, sing, thai];
  const country = ["INDONESIA", "MYANMAR", "SINGAPORE", "THAILAND"];

  const nextimageFun = () => {
    swiperRef.current?.slideNext();
    if (counter === 3) {
      setcounter(3);
    } else {
      setcounter(counter + 1);
    }
  };

  const previmageFun = () => {
    swiperRef.current?.slidePrev();
    if (counter === 0) {
      setcounter(0);
    } else {
      setcounter(counter - 1);
    }
  };

  const packageChoiceFun = (dataset) => {
    setActive(dataset.testName);
    if (dataset.testName === "standard") {
      setdesti("Indonesia   >>   Myanmar");
      setTrpackage(
        "Standard  consectetur adipisicing elit Saepe repellendus, similique atque alias beatae enim. Iste a at optio corporis fuga minus culpa quisquam"
      );
      setPrice(1386);
    } else if (dataset.testName === "deluxe") {
      setdesti("Indonesia   >>   Myanmar   >>   Singapore");
      setTrpackage(
        "Deluxe  consectetur adipisicing elit Saepe repellendus, similique atque alias beatae enim. Iste a at optio corporis fuga minus culpa quisquam"
      );
      setPrice(2086);
    } else if (dataset.testName === "luxury") {
      setdesti("Indonesia   >>   Myanmar   >>   Singapore   >>   Thailand");
      setTrpackage(
        "Luxury  consectetur adipisicing elit Saepe repellendus, similique atque alias beatae enim. Iste a at optio corporis fuga minus culpa quisquam"
      );
      setPrice(2799);
    }
  };

  return (
    <div className="App">
      {/*----------
      -----------
       Home section started here
        ------------
      ----------- */}
      <div className="div-bg-image">
        <img className="bg-image" src={image[counter]} alt="indo" />
        <div className="section-landing">
          <Nav />
          <div className="main-text-section">
            <div className="main-text-border">
              <div className="main-text">
                <h1 className="text">{country[counter]}</h1>
                <p className="text-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe repellendus, similique atque alias beatae enim. Iste a
                  at, optio corporis fuga minus culpa quisquam,
                </p>
                <div className="main-text-btn">
                  <span className="main-text-span">
                    <span>Expplore</span>{" "}
                    <MdNavigateNext className="btnicons" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-section">
            <div className="slider-border">
              <div className="slider-main">
                <div className="slider-main-social">
                  <RiFacebookBoxFill className="icons-fb" />
                  <RiInstagramFill className="icons-insta" />
                  <RiTwitterFill className="icons-twit" />
                </div>
                <div className="slider-slider-main">
                  <p className="slider-title-text">Popular</p>

                  <Swiper
                    className="mySwiper"
                    ref={swiperRef}
                    slidesPerView={4}
                    spaceBetween={5}
                    centeredSlides={true}
                    allowTouchMove={true}
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                  >
                    <SwiperSlide>
                      {" "}
                      <div
                        className={`swiper-img-div1 ${
                          counter === 0 ? "swiper-img-div-wide" : ""
                        }`}
                      >
                        <img className="swiper-img" src={indo} alt="" />

                        <p
                          className={`glass-filter1 ${
                            counter === 0 ? "show-glass-filter" : ""
                          }`}
                        >
                          Jakartar, Bugat
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div
                        className={`swiper-img-div2 ${
                          counter === 1 ? "swiper-img-div-wide" : ""
                        }`}
                      >
                        <img className="swiper-img" src={myan} alt="" />
                        <p
                          className={`glass-filter2 ${
                            counter === 1 ? "show-glass-filter" : ""
                          }`}
                        >
                          Mandalay, Bagan
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div
                        className={`swiper-img-div3 ${
                          counter === 2 ? "swiper-img-div-wide" : ""
                        }`}
                      >
                        <img className="swiper-img" src={sing} alt="" />
                        <p
                          className={`glass-filter3 ${
                            counter === 2 ? "show-glass-filter" : ""
                          }`}
                        >
                          Jurong Lake
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div
                        className={`swiper-img-div4 ${
                          counter === 3 ? "swiper-img-div-wide" : ""
                        }`}
                      >
                        <img className="swiper-img" src={thai} alt="" />
                        <p
                          className={`glass-filter4 ${
                            counter === 3 ? "show-glass-filter" : ""
                          }`}
                        >
                          Chiang Rai
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="next-prev">
                    <CgPlayTrackPrevO
                      className="next-icon"
                      onClick={() => previmageFun()}
                    />
                    <CgPlayTrackNextO
                      className="prev-icon"
                      onClick={() => nextimageFun()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*----------
      -----------
       package section started here
        ------------
      ----------- */}
      <div className="package-section">
        <div className="package-border">
          <div className="package-main">
            <div className="package-type">
              <h1
                className={`standard-text ${
                  active === "standard" ? "package-text-active" : ""
                }`}
                data-test-name="standard"
                onClick={(e) => packageChoiceFun(e.target.dataset)}
              >
                <span style={{ fontSize: "23px" }}>01.</span> STANDARD
              </h1>

              <h1
                className={`deluxe-text ${
                  active === "deluxe" ? "package-text-active" : ""
                }`}
                data-test-name="deluxe"
                onClick={(e) => packageChoiceFun(e.target.dataset)}
              >
                <span style={{ fontSize: "23px" }}>02.</span> DELUXE
              </h1>

              <h1
                className={`luxury-text ${
                  active === "luxury" ? "package-text-active" : ""
                }`}
                data-test-name="luxury"
                onClick={(e) => packageChoiceFun(e.target.dataset)}
              >
                <span style={{ fontSize: "23px" }}>03.</span> LUXURY
              </h1>
            </div>
            <div className="package-desc-div">
              <div className="package-desti-div">
                <p className="package-desti-text">
                  {/* Indonesia | Myanmar | Singapore | Thailand */}
                  {desti}
                </p>
              </div>
              <div className="package-text-div">
                <p className="package-text-large">
                  {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorum, omnis pariatur. */}
                  {trpackage}
                </p>
                <p className="package-text-tiny">
                  {" "}
                  This package includes : Visa Application, Flight Booking,
                  Flight Ticket & Visa Fees Included, Four-star Hotels and Inns,
                  All Meals, Free SIM Card(5GB Data + 150mins){" "}
                </p>
              </div>
              <div className="package-price-div">
                <p className="package-price">See Detail</p>

                <p className="price-text">$ {price}</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="bg-text-package">Package</h1>
      </div>
      <div style={{ width: "100vh", height: "100vh" }}></div>
    </div>
  );
}

export default App;
