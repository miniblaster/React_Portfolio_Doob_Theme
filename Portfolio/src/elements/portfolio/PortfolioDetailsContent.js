import React from "react";

const PortfolioDetailsContent = ({ data }) => {
  return (
    <div className="rwt-portfolio-details rn-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="inner">
              <div className="details-list">

                <div className="row mt--40 row--30">
                  <div className="col-lg-6">
                    <div className="content-left">
                      <h4 className="title">{data.company}</h4>
                      <div className="single-list-wrapper">
                        <div className="single-list">
                          <label>Role:</label>
                          <span>{data.role}</span>
                        </div>
                        <div className="single-list">
                          <label>Date:</label>
                          <span>{data.date}</span>
                        </div>
                      </div>
                      <div className="view-btn mt--50">
                        <a className="btn-default btn-large round" href="#">
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt_md--30 mt_sm--30">
                    <div className="content-right">
                      <div className="description">
                        {data.responsibilities.map((item) => {
                          return (
                            <>
                              <p>{item}</p> <br />
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="portfolio-gallery mt--40">
                <div className="gallery mt--30">
                  <div className="thumbnail">
                    <img
                      className="radius w-100"
                      src={`${process.env.PUBLIC_URL}/${data.gallery.imageOne}`}
                      alt="Corporate Image"
                    />
                  </div>
                </div>
                <div className="gallery mt--30">
                  <div className="thumbnail">
                    <img
                      className="radius w-100"
                      src={`${process.env.PUBLIC_URL}/${data.gallery.imageTwo}`}
                      alt="Corporate Image"
                    />
                  </div>
                </div>
                <div className="gallery mt--30">
                  <div className="thumbnail">
                    <img
                      className="radius w-100"
                      src={`${process.env.PUBLIC_URL}/${data.gallery.imageThree}`}
                      alt="Corporate Image"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsContent;
