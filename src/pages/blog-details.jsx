import React from "react";

function blogdetails() {
  return (
    <>
      <div className="page-section pt-5">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ul className="breadcrumb p-0 mb-0 bg-transparent">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="blog.html">Blog</a>
              </li>
              <li className="breadcrumb-item active">
                Second divided from form fish beastr
              </li>
            </ul>
          </nav>
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-single-wrap">
                <div className="header">
                  <div className="post-thumb">
                    <img src="../assets/img/blog/blog-1.jpg" alt="" />
                  </div>
                  <div className="meta-header">
                    <div className="post-author">
                      <div className="avatar">
                        <img src="../assets/img/person/person_1.jpg" alt="" />
                      </div>
                      by <a href="#">Stephen Doe</a>
                    </div>
                    <div className="post-sharer">
                      <a href="#" className="btn social-facebook">
                        <span className="mai-logo-facebook-f" />
                      </a>
                      <a href="#" className="btn social-twitter">
                        <span className="mai-logo-twitter" />
                      </a>
                      <a href="#" className="btn social-linkedin">
                        <span className="mai-logo-linkedin" />
                      </a>
                      <a href="#" className="btn">
                        <span className="mai-mail" />
                      </a>
                    </div>
                  </div>
                </div>
                <h1 className="post-title">
                  Second divided from form fish beastr
                </h1>
                <div className="post-meta">
                  <div className="post-date">
                    <span className="icon">
                      <span className="mai-time-outline" />
                    </span>{" "}
                    <a href="#">March 10, 2020</a>
                  </div>
                  <div className="post-comment-count ml-2">
                    <span className="icon">
                      <span className="mai-chatbubbles-outline" />
                    </span>{" "}
                    <a href="#">4 Comments</a>
                  </div>
                </div>
                <div className="post-content">
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    saepe aliquid perferendis neque eos commodi nulla, veniam ex
                    mollitia, quod dignissimos id exercitationem corporis. At
                    optio laudantium suscipit in nam!
                  </p>
                  <blockquote className="quote">
                    &ldquo;I&apos;m selfish, impatient and a little insecure. I
                    make mistakes, I am out of control and at times hard to
                    handle. But if you can&apos;t handle me at my worst, then
                    you sure as hell don&apos;t deserve me at my best.&rdquo;
                    <span className="author">&mdash; Marilyn Monroe</span>
                  </blockquote>

                  <p>
                    Praesent vel mi bibendum, finibus leo ac, condimentum arcu.
                    Pellentesque sem ex, tristique sit amet suscipit in, mattis
                    imperdiet enim. Integer tempus justo nec velit fringilla,
                    eget eleifend neque blandit. Sed tempor magna sed congue
                    auctor. Mauris eu turpis eget tortor ultricies elementum.
                    Phasellus vel placerat orci, a venenatis justo. Phasellus
                    faucibus venenatis nisl vitae vestibulum. Praesent id nibh
                    arcu. Vivamus sagittis accumsan felis, quis vulputate
                  </p>
                </div>
              </div>
              <div className="comment-form-wrap pt-5">
                <h2 className="mb-5">Leave a comment</h2>
                <form action="#" className="">
                  <div className="form-row form-group">
                    <div className="col-md-6">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="url" className="form-control" id="website" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="msg"
                      id="message"
                      cols={30}
                      rows={8}
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      defaultValue="Post Comment"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget">
                {/* Widget search */}
                <div className="widget-box">
                  <form action="#" className="search-widget">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter keyword.."
                    />
                    <button type="submit" className="btn btn-primary btn-block">
                      Search
                    </button>
                  </form>
                </div>
                {/* Widget Categories */}
                <div className="widget-box">
                  <h4 className="widget-title">Category</h4>
                  <div className="divider" />
                  <ul className="categories">
                    <li>
                      <a href="#">LifeStyle</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Healthy</a>
                    </li>
                    <li>
                      <a href="#">Sports</a>
                    </li>
                    <li>
                      <a href="#">Entertainment</a>
                    </li>
                  </ul>
                </div>
                {/* Widget recent post */}
                <div className="widget-box">
                  <h4 className="widget-title">Recent Post</h4>
                  <div className="divider" />
                  <div className="blog-item">
                    <a className="post-thumb" href="">
                      <img src="../assets/img/blog/blog-1.jpg" alt="" />
                    </a>
                    <div className="content">
                      <h6 className="post-title">
                        <a href="#">
                          Even the all-powerful Pointing has no control
                        </a>
                      </h6>
                      <div className="meta">
                        <a href="#">
                          <span className="mai-calendar" /> July 12, 2018
                        </a>
                        <a href="#">
                          <span className="mai-person" /> Admin
                        </a>
                        <a href="#">
                          <span className="mai-chatbubbles" /> 19
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-item">
                    <a className="post-thumb" href="">
                      <img src="../assets/img/blog/blog-2.jpg" alt="" />
                    </a>
                    <div className="content">
                      <h6 className="post-title">
                        <a href="#">
                          Even the all-powerful Pointing has no control
                        </a>
                      </h6>
                      <div className="meta">
                        <a href="#">
                          <span className="mai-calendar" /> July 12, 2018
                        </a>
                        <a href="#">
                          <span className="mai-person" /> Admin
                        </a>
                        <a href="#">
                          <span className="mai-chatbubbles" /> 19
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-item">
                    <a className="post-thumb" href="">
                      <img src="../assets/img/blog/blog-3.jpg" alt="" />
                    </a>
                    <div className="content">
                      <h6 className="post-title">
                        <a href="#">
                          Even the all-powerful Pointing has no control
                        </a>
                      </h6>
                      <div className="meta">
                        <a href="#">
                          <span className="mai-calendar" /> July 12, 2018
                        </a>
                        <a href="#">
                          <span className="mai-person" /> Admin
                        </a>
                        <a href="#">
                          <span className="mai-chatbubbles" /> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Widget Tag Cloud */}
                <div className="widget-box">
                  <h4 className="widget-title">Tag Cloud</h4>
                  <div className="divider" />
                  <div className="tag-clouds">
                    <a href="#" className="tag-cloud-link">
                      Projects
                    </a>
                    <a href="#" className="tag-cloud-link">
                      Design
                    </a>
                    <a href="#" className="tag-cloud-link">
                      Travel
                    </a>
                    <a href="#" className="tag-cloud-link">
                      Brand
                    </a>
                    <a href="#" className="tag-cloud-link">
                      Trending
                    </a>
                    <a href="#" className="tag-cloud-link">
                      Knowledge
                    </a>
                    <a href="#" className="tag-cloud-link">
                      Food
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default blogdetails;
