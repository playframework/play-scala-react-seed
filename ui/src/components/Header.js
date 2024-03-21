import React from 'react';

const Header = () => {
  return (
    <header class="header-one header--sticky">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-2 col-md-3 col-4">
            <a href="index.html" class="thumbnail">
              <img class="active-light" src="../assets/images/logo/logo-1.png" alt="axela-logo" />
              <img class="active-dark" src="../assets/images/logo/logo-2.svg" alt="axela-logo" />
            </a>
          </div>
          <div class="col-lg-7 d-none d-xl-block">
            <div class="main-header">
              <nav class="main-nav">
                <ul className="mainmenu">

                  <li className="has-droupdown">
                    <a href="#">Home</a>
                    <ul className="submenu home-mega">
                      <li className="m-1">
                        <ul className="multiple">
                          <li><a className="multi" href="index.html">Creative Agency</a></li>
                          <li><a className="multi" href="index-two.html">Corporate Agency</a></li>
                          <li><a className="multi" href="index-three.html">StartUp Agency</a></li>
                          <li><a className="multi" href="index-four.html">Digital Agency</a></li>
                          <li><a className="multi" href="index-five.html">Portfolio Agency</a></li>
                          <li><a className="multi" href="index-six.html">Full Screen Slider</a></li>
                          <li><a className="multi" href="index-seven.html">Portfolio Showcase</a></li>
                        </ul>
                      </li>
                      <li className="m-1">
                        <ul className="single">
                          <li><a className="multi" href="one-page-one.html">Creative OnePage</a></li>
                          <li><a className="multi" href="one-page-two.html">Corporate OnePage</a></li>
                          <li><a className="multi" href="one-page-three.html">StartUp OnePage</a></li>
                          <li><a className="multi" href="one-page-four.html">Digital OnePage</a></li>
                          <li><a className="multi" href="one-page-five.html">Portfolio OnePage</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li className="has-droupdown">
                    <a href="#">Services</a>
                    <ul className="submenu">
                      <li><a className="single" href="service.html">Our Services</a></li>
                      <li><a className="single" href="service-details.html">Service Details</a></li>
                    </ul>
                  </li>
                  <li className="has-droupdown">
                    <a href="#">Pages</a>
                    <ul className="submenu home-mega home-mega2">
                      <li className="m-1">
                        <ul className="multiple">
                          <li><a className="multi" href="appoinment.html">Appoinment</a></li>
                          <li><a className="multi" href="about.html">About Us</a></li>
                          <li><a className="multi" href="price-plan.html">Price Plans</a></li>
                          <li><a className="multi" href="faq.html">FAQ Page</a></li>
                          <li><a className="multi" href="testimonial.html">Testimonial</a></li>
                          <li><a className="multi" href="404.html">404 Page</a></li>
                        </ul>
                      </li>
                      <li className="m-1">
                        <ul className="multiple">
                          <li><a className="multi" href="portfolio.html">Portfolio Style 1</a></li>
                          <li><a className="multi" href="portfolio-style-2.html">Portfolio Style 2</a></li>
                          <li><a className="multi" href="portfolio-style-3.html">Portfolio Style 3</a></li>
                          <li><a className="multi" href="portfolio-style-4.html">Portfolio Style 4</a></li>
                          <li><a className="multi" href="portfolio-style-5.html">Portfolio Style 5</a></li>
                          <li><a className="multi" href="project-details.html">Portfolio Details</a></li>
                        </ul>
                      </li>
                      <li className="m-1">
                        <ul className="multiple last">
                          <li><a className="multi" href="team.html">Team Style 1</a></li>
                          <li><a className="multi" href="team-style-2.html">Team Style 2</a></li>
                          <li><a className="multi" href="team-style-3.html">Team Style 3</a></li>
                          <li><a className="multi" href="team-style-4.html">Team Style 4</a></li>
                          <li><a className="multi" href="team-style-5.html">Team Style 5</a></li>
                          <li><a className="multi" href="team-details.html">Team Details</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-droupdown">
                    <a href="#">Blog</a>
                    <ul className="submenu">
                      <li><a className="single" href="blog-list.html">Blog List</a></li>
                      <li><a className="single" href="blog-grid.html">Blog Grid</a></li>
                      <li><a className="single" href="blog-details.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="contactus.html">Contact</a>
                  </li>

                </ul>
              </nav>
            </div>
          </div>
          <div class="col-xl-3 col-lg-10 col-md-9 col-8">
            <div class="header-right">
              <a href="#" class="rts-btn btn-secondary call-btn">Let’s Talk
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M5.96875 7C5.96875 6.46875 5.5 6 4.96875 6H4.5C3.375 6 2.5 6.90625 2.5 8.03125V9.5C2.5 10.625 3.375 11.5 4.5 11.5H5C5.53125 11.5 6 11.0625 6 10.5L5.96875 7ZM8 0C3.5 0 0.125 3.75 0 8V9.25C0 9.6875 0.3125 10 0.71875 10C1.09375 10 1.5 9.6875 1.5 9.25V8C1.5 4.4375 4.40625 1.53125 8 1.53125C11.5625 1.53125 14.5 4.4375 14.5 8V12.5C14.5 13.2188 13.9375 13.75 13.25 13.75H9.78125C9.53125 13.3125 9.03125 13 8.5 13H7.53125C6.8125 13 6.15625 13.5 6 14.2188C5.84375 15.1875 6.5625 16 7.46875 16H8.5C9.03125 16 9.53125 15.7188 9.78125 15.25H13.25C14.75 15.25 16 14.0312 16 12.5V8C15.8438 3.75 12.4688 0 8 0ZM11.5 11.5C12.5938 11.5 13.5 10.625 13.5 9.5V8.03125C13.5 6.90625 12.5938 6 11.5 6H11C10.4375 6 10 6.46875 10 7.03125V10.5C10 11.0625 10.4375 11.5 11 11.5H11.5Z"
                    fill="#3B38EB"/>
                </svg>
              </a>
              <a id="menu-btn" href="#" class="rts-btn btn-secondary menu-btn" onclick="event.preventDefault();">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <rect y="12" width="18" height="2" fill="#3B38EB"/>
                  <rect x="5" y="6" width="8" height="2" fill="#3B38EB"/>
                  <rect width="18" height="2" fill="#3B38EB"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
