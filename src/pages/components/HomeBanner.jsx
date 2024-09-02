import React from "react";

function HomeBanner() {
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="container">
      <div className="page-banner home-banner" id="home">
        <div className="row align-items-center flex-wrap-reverse h-100">
          <div className="col-md-6 py-5 wow fadeInLeft">
            <h1 className="mb-4">
              Let&apos;s Check and Optimize your website!
            </h1>

            <p className="text-lg text-grey mb-5">
              Ignite the most powerful growth engine you have ever built for
              your company
            </p>
            <a href="#" className="btn btn-primary btn-split">
              Watch Video{" "}
              <div className="fab">
                <span className="mai-play" />
              </div>
            </a>
          </div>
          <div className="col-md-6 py-5 wow zoomIn">
            <div className="img-fluid text-center">
              <img src="../assets/img/banner_image_1.svg" alt="Banner" />
            </div>
          </div>
        </div>
        <a
          href="#about"
          className="btn-scroll"
          onClick={(e) => smoothScroll(e, "about")}
        >
          <span className="mai-arrow-down" />
        </a>
      </div>
    </div>
  );
}

export default HomeBanner;
