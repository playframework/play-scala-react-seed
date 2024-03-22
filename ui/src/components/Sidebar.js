import React from 'react';
import logo from '../assets/images/logo/logo-1.png';

const Sidebar = () => {
  return (
    <div id="side-bar" className="side-bar">
      <button className="close-icon-menu"><i className="far fa-times"></i></button>
      <div className="rts-sidebar-menu-desktop">
        <a className="logo-1" href="index.html"><img className="logo" src={logo} alt="axela_logo" /></a>
        <div className="body d-none d-xl-block">
          <p className="disc">
            We must explain to you how all seds this mistakens idea and pleasures and account.
          </p>
          <div className="social-wrapper-two">
            <ul className="social-area">
              <li data-sal-delay="150" data-sal="slide-up" data-sal-duration="800" className="sal-animate"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li data-sal-delay="250" data-sal="slide-up" data-sal-duration="800" className="sal-animate"><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li data-sal-delay="350" data-sal="slide-up" data-sal-duration="800" className="sal-animate"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li data-sal-delay="450" data-sal="slide-up" data-sal-duration="800" className="sal-animate"><a href="#"><i className="fab fa-skype"></i></a></li>
            </ul>
          </div>
          <div className="get-in-touch mt--50">
            <div className="h6 title">Get In Touch</div>
            <div className="wrapper">
              <div className="single">
                <i className="fas fa-phone-alt"></i>
                <a href="#">+8801234566789</a>
              </div>
              <div className="single">
                <i className="fas fa-envelope"></i>
                <a href="#">example@gmail.com</a>
              </div>
              <div className="single">
                <i className="fas fa-globe"></i>
                <a href="#">www.webexample.com</a>
              </div>
              <div className="single">
                <i className="fas fa-map-marker-alt"></i>
                <a href="#">13/A, New Pro State, NYC</a>
              </div>
            </div>
          </div>
        </div>
        <div className="body-mobile d-block d-xl-none">
          <nav className="nav-main mainmenu-nav mt--30">
            {/* Mobile menu items */}
          </nav>
          <div className="social-wrapper-two mt--50">
            {/* Social links */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
