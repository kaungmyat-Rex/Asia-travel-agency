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
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { MdOutlineFastfood } from "react-icons/md";
import { RiBus2Line } from "react-icons/ri";
import { MdOutlinePersonPin } from "react-icons/md";

import SearchModel from "./component/SearchModel";

function App() {
  const swiperRef = useRef(null);
  const [counter, setcounter] = useState(0);
  const [desti, setdesti] = useState("Indonesia   >>   Myanmar");
  const [trpackage, setTrpackage] = useState(
    "A standard travel package typically includes several components to make planning and booking a trip easier and more convenient for travelers."
  );
  const [price, setPrice] = useState(1386);
  const [active, setActive] = useState("standard");
  const image = [indo, myan, sing, thai];
  const country = ["INDONESIA", "MYANMAR", "SINGAPORE", "THAILAND"];
  const [searchModel, setSearchModel] = useState(false);
  const [openSidnav, setOpenSidenav] = useState(false);

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
        "A standard travel package typically includes several components to make planning and booking a trip easier and more convenient for travelers."
      );
      setPrice(1386);
    } else if (dataset.testName === "deluxe") {
      setdesti("Indonesia   >>   Myanmar   >>   Singapore");
      setTrpackage(
        "A deluxe travel package is an upgraded version of a standard travel package and typically includes more luxurious and high-end components."
      );
      setPrice(2086);
    } else if (dataset.testName === "luxury") {
      setdesti("Indonesia   >>   Myanmar   >>   Singapore   >>   Thailand");
      setTrpackage(
        "A luxury travel package is designed to provide the ultimate travel experience, with the highest level of comfort, exclusivity, and personalized service."
      );
      setPrice(2799);
    }
  };

  return (
    <div className={`App ${openSidnav ? "app-fixed" : ""}`}>
      {/*----------
      -----------
       Home section started here
        ------------
      ----------- */}
      <div className="div-bg-image" id="home">
        <img className="bg-image" src={image[counter]} alt="indo" />
        <SearchModel
          searchModel={searchModel}
          setSearchModel={setSearchModel}
        />

        <div className="section-landing">
          <Nav
            searchModel={searchModel}
            setSearchModel={setSearchModel}
            openSidnav={openSidnav}
            setOpenSidenav={setOpenSidenav}
          />
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
                    allowTouchMove={false}
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
      <div className="package-section" id="package">
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
              <CgScrollV className="scroll-icon-package" />
            </div>
            <div className="package-desc-div">
              <div className="package-desti-div">
                <p className="package-desti-text">
                  {/* Indonesia | Myanmar | Singapore | Thailand */}
                  {desti}
                </p>
              </div>
              <>
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
              </>
              <div className="package-price-div">
                <p className="package-price">See Detail</p>

                <p className="price-text">$ {price}</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="bg-text-package">Package</h1>
      </div>
      {/*----------
      -----------
       about section started here
        ------------
      ----------- */}
      <div className="about-section" id="about">
        <div className="about-border">
          <div className="about-main">
            <div className="about-flight-first">
              <h1 className="about-title-first">REASON TO</h1>
              <h1 className="about-title-first">CHOOSE US</h1>
            </div>

            <div className="about-flight">
              <MdOutlineAirplaneTicket className="flight-icon" />
              <p className="about-flight-title">Flight</p>
              <p className="about-flight-text">
                We work with the best airlines and take care of flight booking,
                Visa application and other travel documents.
              </p>
            </div>

            <div className="about-flight">
              <RiHotelLine className="flight-icon" />
              <p className="about-flight-title">Accomodation</p>
              <p className="about-flight-text">
                We choose the best hotels to ensure great experiences while
                visiting Switzerland. All hotels are rated either four or five
                stars.
              </p>
            </div>

            <div className="about-flight">
              <MdOutlineFastfood className="flight-icon" />
              <p className="about-flight-title">Food</p>
              <p className="about-flight-text">
                All meal plans are carefully selected so that customers will be
                able to enjoy both local and international cuisines.
              </p>
            </div>

            <div className="about-flight">
              <RiBus2Line className="flight-icon" />
              <p className="about-flight-title">Transportation</p>
              <p className="about-flight-text">
                Don’t worry about transportation when going from one place to
                another. We will take care of everything.
              </p>
            </div>

            <div className="about-flight">
              <MdOutlinePersonPin className="flight-icon" />
              <p className="about-flight-title">Tour Guide</p>
              <p className="about-flight-text">
                Our tour leaders or guide are experienced and professional to
                provide the best service the entire trip.
              </p>
            </div>
          </div>
        </div>
        <h1 className="bg-text-about">Why Us?</h1>
      </div>
      {/*----------
      -----------
       contact section started here
        ------------
      ----------- */}
      <div className="contact-section" id="contact">
        <div className="contact-border">
          <div className="contact-main">
            <div className="contact-info">
              <h3 className="contact-address">ADDRESS</h3>
              <p className="address">Yangon , Sanchaung , Ma gyi street</p>
              <h3 className="contact-phone">PHONE</h3>
              <p className="phone">09-23234456575 / 09-345657534</p>
              <h3 className="contact-email">EMAIL</h3>
              <p className="email">aungakm667@gmail.com</p>
            </div>
            <div className="contact-input">
              <h1 className="input-title">Feel Free To Ask</h1>
              <p className="input-name">Tell Us Your Name</p>
              <input type="text" name="" id="" placeholder=" name" />
              <p className="input-email">Your Email</p>
              <input type="text" name="" id="" placeholder=" email" />
              <p className="input-phone">Your Phone</p>
              <input type="text" name="" id="" placeholder=" phone" />
              <p className="input-comment">Your Comment</p>
              <textarea
                className="input-textarea"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder=" Comment"
              ></textarea>
              <p className="input-btn">Submit</p>
            </div>
          </div>
        </div>
        <h1 className="bg-text-contact">Contact</h1>
      </div>
    </div>
  );
}

export default App;
