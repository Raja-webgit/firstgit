import React from "react";
import "../styles/Experts.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Expert1 from "../images/expert1.jpg";
import Expert2 from "../images/expert2.jpg";
import Expert3 from "../images/expert3.jpg";
import Expert4 from "../images/expert4.png";

const Experts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <>
        <div>
          <div class="container expert-container text-center py-4">
            <p class="card-body main-heading text-white "> Speak to Our experts </p>
            <div class="row py-4">
              <div class="col-3">
                <div class="card text-center expert-card">
                  <div class="card-body">
                    <img
                      src={Expert1}
                      class="img-fluid rounded-circle card-img  "
                      alt="..."
                    />
                    <h5 class="card-title py-1">Mr. NITESH ROY</h5>
                    <p class="card-text fs-5">Astrologer</p>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card text-center expert-card">
                  <div class="card-body">
                    <img
                      src={Expert2}
                      class="img-fluid rounded-circle card-img "
                      alt="..."
                    />
                    <h5 class="card-title py-1">Mr. NITESH ROY</h5>
                    <p class="card-text fs-5">Astrologer</p>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card text-center expert-card">
                  <div class="card-body">
                    <img
                      src={Expert3}
                      class="img-fluid rounded-circle card-img "
                      alt="..."
                    />
                    <h5 class="card-title py-1">Mr. NITESH ROY</h5>
                    <p class="card-text fs-5">Astrologer</p>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card text-center expert-card">
                  <div class="card-body">
                    <img
                      src={Expert3}
                      class="img-fluid rounded-circle card-img "
                      alt="..."
                    />
                    <h5 class="card-title py-1">Mr. NITESH ROY</h5>
                    <p class="card-text fs-5">Astrologer</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center py-3">
              <p class="sub-heading">
                Get in touch with our experts to avail specified consulting and
                guidance ,be it in match making
                <br /> bollywood Astrology ,vedic astrology ,medical astrology
                random text any quick guide yo teract anfd react anf
              </p>
            </div>
          </div>
        </div>

        <div>
          
         
        </div>
      </>
    </div>
  );
};

export default Experts;
