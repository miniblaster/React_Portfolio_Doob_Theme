import React from "react";
import SEO from "../common/SEO";
import HeaderTopNews from "../common/header/HeaderTopNews";
import HeaderOne from "../common/header/HeaderOne";
import FooterFour from "../common/footer/FooterFour";
import BrandThree from "../elements/brand/BrandThree";
import AboutFour from "../elements/about/AboutFour";
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import TeamFour from "../elements/team/TeamFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";
import ComputerImage from "../assets/images/com.jpg";
import ContactInfo from "../data/contact.json";

const AboutUs = () => {
  return (
    <>
      <SEO title="About Us" />
      <main className="page-wrapper">
        {/* <HeaderTopNews /> */}
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-transparent"
        />

        {/* Start Slider Area  */}
        <div
          className="slider-area slider-style-1 height-850 bg_image"
          data-black-overlay="5"
          style={{
            backgroundImage: `url(${ComputerImage})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner pt--80 text-center">
                  <div>
                    <h3 className="rn-sub-badge">
                      <span className="theme-gradient">Who am I?</span>
                    </h3>
                  </div>
                  <h1 className="title display-one">
                    Professional & Innovative <br /> {ContactInfo.role}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        {/* Start Service Area  */}
        <div className="service-area rn-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="content">
                  <h3 className="title">
                    I am an experienced <br /> {ContactInfo.role1}
                  </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="mb--10">
                  {ContactInfo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start Brand Area  */}
        <div className="rwt-brand-area pb--60 pt--30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mt--10">
                <BrandThree brandStyle="brand-style-2" />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area  */}

        <Separator />

        <FooterFour />
      </main>
    </>
  );
};

export default AboutUs;
