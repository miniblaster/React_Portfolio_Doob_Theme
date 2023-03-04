import React from "react";
import PortfolioDetailsContent from "../elements/portfolio/PortfolioDetailsContent";
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import PortfolioData from "../data/experience.json";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";

const PortfolioDetails = ({
  match: {
    params: { id },
  },
}) => {
  const portfolioId = parseInt(id, 10);
  const data = PortfolioData.filter(
    (portfolio) => portfolio.id === portfolioId
  );
  return (
    <>
      <SEO title="Portfolio Details || Doob" />
      <Layout>
        <BreadcrumbOne
          title={data[0].role}
          rootUrl="/"
          parentUrl="Home"
          currentUrl={"Portfolio / " + id}
        />
        <PortfolioDetailsContent data={data[0]} />
      </Layout>
    </>
  );
};

export default PortfolioDetails;
