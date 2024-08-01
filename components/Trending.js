import Link from "next/link";
import SpecialBox from "./SpecialBox";

const Trending = () => {
  return (
    <>
      <div className="trending-container" id="trending">
        <SpecialBox />
        <h1 className="heading1 pt-5 ">Tren<span className="text-gold">ding</span></h1>
        <div className="container1">
          <div className="trendbx">
            <div>
              <div className="trendimg">
                <img src="/themes/viralon/images/trending1.jpg" />
              </div>
              <h4>Digital</h4>
              <Link href="/blogs">Defending Your X...</Link>
            </div>
            <div>
              <div className="trendimg">
                <img src="/themes/viralon/images/trending2.jpg" />
              </div>
              <h4>Experiential Marketing</h4>
              <Link href="/blogs">Defending Your X...</Link>
            </div>
            <div>
              <div className="trendimg">
                <img src="/themes/viralon/images/trending1.jpg" />
              </div>
              <h4>Experiential Marketing</h4>
              <Link href="/blogs">Then New App In Town - Hello Instagram Threads</Link>
            </div>
          </div>
        </div>
        <Link href="/blogs" className="explore ">Explore More <i className="ri-arrow-right-line"></i></Link>
      </div>
    </>
  );
}

export default Trending;