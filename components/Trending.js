import Link from "next/link";
import SpecialBox from "./SpecialBox";

const Trending = () => {
  return (
    <>
      <div className="trending-container" id="trending">
        <SpecialBox />
        <h1 className="heading1 pt-5 ">
          Tren<span className="text-gold">ding</span>
        </h1>
        <div className="container">
          <div className="row mt-4">
            <div className="col-xl-4 col-md-6 mb-30 ">
              <div className="blog-style-one">
                <div className="thumb">
                  <Link href="/blog-details">
                    <img src="../images/blog/blog1.jpg" alt="Thumb" />
                  </Link>
                </div>
                <div className="info">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <Link href="#">30 Aug 2024</Link>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      Discovery incommode earnestly commanded if.
                    </Link>
                  </h4>
                  <Link href="/blog-details" className="btn-simple">
                    <i className="ri-arrow-right-s-line"></i> Read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 mb-30 ">
              <div className="blog-style-one">
                <div className="thumb">
                  <Link href="/blog-details">
                    <img src="../images/blog/blog2.jpg" alt="Thumb" />
                  </Link>
                </div>
                <div className="info">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <Link href="#">30 Aug 2024</Link>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      Expression acceptance imprudence particular
                    </Link>
                  </h4>
                  <Link href="/blog-details" className="btn-simple">
                    <i className="ri-arrow-right-s-line"></i> Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-30">
              <div className="blog-style-one">
                <div className="thumb">
                  <Link href="/blog-details">
                    <img src="../images/blog/blog3.jpg" alt="Thumb" />
                  </Link>
                </div>
                <div className="info">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <Link href="#">30 Aug 2024</Link>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <Link href="/blog-details">
                      Considered imprudence of technical friendship.
                    </Link>
                  </h4>
                  <Link href="/blog-details" className="btn-simple">
                    <i className="ri-arrow-right-s-line"></i> Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="/blogs" className="explore ">
          Explore More <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </>
  );
};

export default Trending;
