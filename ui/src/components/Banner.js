import React from 'react';

const Banner = () => {
  return (
    <div className="banner-area bg_image--1 bg_image rts-section-gap">
      <div className="container shape-line">
        <div className="row align-items-start pt--100 pt_sm--50 banner-shape-red">
          <div className="col-lg-6 order-xl-1 order-md-2 order-sm-1 order-1">
            <div className="banner-one-content-wrapper">
              <span className="pre-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">All In
                One Solution For You</span>
              <h1 className="title-banner" data-sal-delay="200" data-sal="slide-up" data-sal-duration="800">
                Build Your Business
                Easy Solution
              </h1>
              <p className="banner-disc" data-sal-delay="250" data-sal="slide-up" data-sal-duration="800">
                Enim luctus sociis cum quam cubilia penatibus sodales neque tristique tempor dignissim
                aptent sollicitudin mattis integer magnis
              </p>
              <div className="banner-wrapper button" data-sal-delay="300" data-sal="slide-up" data-sal-duration="800">
                <a href="#" className="rts-btn btn-primary">Get Started</a>

                <a href="https://www.youtube.com/embed/KwpA_CvmWV0" className="btn-watch-video fancybox fancybox.iframe ml--25">
                  <span className="icon"></span>
                  <span className="text">Play Video</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-xl-2">
            <div className="banner-shape-area-one">
              <img src="../assets/images/banner/shape/01.png" alt="banner_shape" data-sal-delay="200" data-sal="zoom-in" data-sal-duration="1000" />
            </div>
            <div className="banner-thumb-1 banner-shape-one">
              <img src="../assets/images/banner/01.png" alt="Creative_banner" data-sal-delay="200" data-sal="zoom-in" data-sal-duration="1000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
