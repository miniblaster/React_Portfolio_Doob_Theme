import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioOne from "./PortfolioOne";
import ComputerImage from "../../assets/images/com.jpg";
import ContactInfo from "../../data/contact.json";
import EducationInfo from "../../data/education.json";
import HeaderOne from "../../common/header/HeaderOne";
import FooterFour from "../../common/footer/FooterFour";
import ContactOne from "../contact/ContactOne";
import AboutSix from "../about/AboutSix";
import { Link } from "react-router-dom";

const PortfolioThreeColumn = () => {
  return (
    <>
      <SEO title="Portfolio" />

      <main className="page-wrapper">
        {/* <HeaderTopNews /> */}
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-transparent"
        />

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

        <div className="main-content">
          <div className="rwt-portfolio-area rn-section-gap">
            <div className="container">
              <div className="row" id="about">
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

              <AboutSix />

              <div className="row" id="portfolio">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Experience"
                    title="Professional Experience"
                    description=""
                  />
                </div>
              </div>
              <PortfolioOne Column="col-lg-4 col-md-6 mt--30 portfolio" />

              <div className="row mt--50">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Education"
                    title="Education"
                    description=""
                  />
                </div>
              </div>
              <div className="text-center">
                {EducationInfo.map((item) => {
                  return (
                    <div className="text-center">
                      <u>
                        <h4>{item.university}</h4>
                      </u>
                      <h5>{item.bachelor}</h5>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="row mt--50" id="contactForm">
                <div className="col-lg-12 mb--40">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Contact Form"
                    title="Please contact me here."
                    description=""
                  />
                </div>
              </div>
              <ContactOne />
            </div>
          </div>
        </div>

        <FooterFour />
      </main>
    </>
  );
};
export default PortfolioThreeColumn;
