import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioOne from "./PortfolioOne";
import EducationInfo from "../../data/education.json";

const PortfolioThreeColumn = () => {
  return (
    <>
      <SEO title="Portfolio" />
      <Layout>
        <BreadcrumbOne
          title="Professional & Innovative <br /> Website Developer"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Portfolio"
        />
        <div className="main-content">
          <div className="rwt-portfolio-area rn-section-gap">
            <div className="container">
              <div className="row">
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

              <div className="row mt-5">
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
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default PortfolioThreeColumn;
