import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SocialShare from "../../components/SocialShare";
import Subscriber from "../../components/Subscriber";
import OurIndustryExpert from "../../components/ourIndustryExpert";
import CustomHead from "../../components/CustomHead";

const WhoWeAre = () => {
  return (
   
    <>

  <CustomHead title="Viralon | Who We Are | Best Digital Marketing Agency in India "
   keywords="Viralon, Digital Marketing Agency, Who We Are " 
   description="Viralon is your partner in achieving digital excellence.Our team is composed of young and enthusiastic individuals guided by visionary management." />
  <Header/>
  <SocialShare/>
  {/*-------------- Menu Section Codes Start From Here -------------*/}

  {/*-------------- Menu Section Codes End From Here -------------*/}
  {/*-------------- Hero Section Codes Start From Here -------------*/}
  <section
    className="section hero-section-2 sm-none"
    style={{
      backgroundImage: "url(/images/hero-banners/who-we-are-banner.jpg)"
    }}
  ></section>
  <section
    className="section hero-section-2 desk-none"
    style={{
      backgroundImage: "url(/images/hero-banners/who-we-are-banner-sm.jpg)"
    }}
  />
  {/*-------------- Hero Section Codes End From Here -------------*/}
  {/*-------------- Who We Are Section Codes Start From Here--------*/}
  <section className="pt-5 pb-5 bottom-p ">
    <div className="container">
      <div className="row flex-wrap-reverse align-items-center">
        <div className="col-md-6 para-size">
          <h1 className="font-size-40 font-weight-900 text-dark heading_style_1  mb-3">
            Who <span className="text-gold">We Are</span>
          </h1>
          <p>
            At Viralon Digital Services, we are your partners in achieving
            digital excellence. Our team is composed of young and enthusiastic
            individuals guided by visionary management, and together, we are
            dedicated to helping businesses thrive in the digital landscape. We
            offer a comprehensive range of services, including full-stack
            digital marketing solutions, digital product development, cloud
            solutions, and innovative design services. With a deep commitment to
            delivering results, we work tirelessly to help you navigate the
            complexities of the digital world, ensuring your brand stands out
            and succeeds. Join us on this exciting journey to digital success,
            where your goals become our mission.
          </p>
        </div>
        <div className="col-md-6">
          <img src="/images/wwr.png" className="w-555 mb-md-0 mb-4 " alt="" />
        </div>
      </div>
    </div>
  </section>
  {/*-------------- Who We Are Section Codes End From Here -------------*/}
  {/* Our Industry Section Codes Start From Here */}
  
  <OurIndustryExpert/>
  {/* Our Industry Section Codes End From Here */}
  {/*-------------- Our Specilalization Section Codes Start From Here -------------*/}
  <div className="our-specialization-container">
    <div className="specil-bx">
      <div className="container">
        <div className="get-freebx">
          <div>
            <h2>
              {" "}
              <span style={{ color: "black" }}>Get a FREE 2</span> hrs
              consultation by our experts
            </h2>
          </div>
          <div>
            {/* <a href="#" class="book-btn">Let's Talk</a> */}
            <div className="mdtop studies-btn book-btn">
              <Link
                href="/contact-us">
               <div className="btn btn-primary trans animated pulse abt-butn-bot"
              >
                Talk to Expert
                <img
                  src="/images/icons/next.png"
                  className="arrow  next-arow arrow1  animate-right-to-left"
                />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shapebx">
      <img src="/images/shape.png" />
    </div>
    <div className="container1">
      <h2 className="heading1 margin-top-0 mt-3">
        Our <span className="text-gold">Values</span>
      </h2>
      <div className="items2">
        <div className="wg-box-content ">
          <a href="#">
            <div className="wg-box-content-overlay">
              <h2>Innovative</h2>
              <p>
                At Viralon Digital Services, we champion innovation as the
                driving force behind our success. We relentlessly seek inventive
                solutions, pushing the boundaries of what's possible in the
                digital world. We are committed to staying at the forefront of
                technology and pioneering new paths to excellence.
              </p>
            </div>
            <img
              className="wg-box-content-image"
              src="/images/value3.jpg"
              alt="Wellnes Image"
            />
            <div className="wg-box-content-details wg-box-fadeIn-bottom">
              <h3 className="wg-box-content-title">Innovative</h3>
            </div>
          </a>
        </div>
        <div className="wg-box-content ">
          <a href="#">
            <div className="wg-box-content-overlay">
              <h2>Accountable</h2>
              <p>
                {" "}
                Accountability is our cornerstone. We take ownership of our
                actions and their outcomes, holding ourselves responsible for
                delivering on our promises. We believe that accountability
                breeds trust, and we strive to earn and maintain the trust of
                our clients and partners.{" "}
              </p>
            </div>
            <img
              className="wg-box-content-image"
              src="/images/value1.jpg"
              alt="It Image"
            />
            <div className="wg-box-content-details wg-box-fadeIn-bottom">
              <h3 className="wg-box-content-title">Accountable</h3>
            </div>
          </a>
        </div>
      </div>
      <div className="items2">
        <div className="wg-box-content ">
          <a href="#">
            <div className="wg-box-content-overlay">
              <h2>Determination</h2>
              <p>
                Our tenacious determination fuels our journey to success. We
                persistently tackle challenges head-on, never backing down from
                adversity. We believe that determination is the key to
                overcoming obstacles, achieving goals, and continuously evolving
                in the digital realm.
              </p>
            </div>
            <img
              className="wg-box-content-image"
              src="/images/value4.jpg"
              alt="Wellnes Image"
            />
            <div className="wg-box-content-details wg-box-fadeIn-bottom">
              <h3 className="wg-box-content-title">Determination</h3>
            </div>
          </a>
        </div>
        <div className="wg-box-content ">
          <a href="#">
            <div className="wg-box-content-overlay">
              <h2>Tenacious</h2>
              <p>
                Tenacity fuels our drive for success. We approach challenges
                with unwavering determination, persistently pursuing solutions
                even when obstacles arise. Our resilience in the face of
                adversity empowers us to overcome hurdles and achieve
                outstanding results for our clients.
              </p>
            </div>
            <img
              className="wg-box-content-image"
              src="/images/value2.jpg"
              alt="It Image"
            />
            <div className="wg-box-content-details wg-box-fadeIn-bottom">
              <h3 className="wg-box-content-title">Tenacious</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/*-------------- Our Specilalization Section Codes End From Here -------------*/}
  {/*-------------- Trending Section Codes Start From Here -------------*/}
  <div className="trending-container mt-5 mb-5" id="trending">
    <h1 className="heading1 pt-5 who-we-are-h">
      Tren<span className="text-gold">ding</span>
    </h1>
    <div className="container1">
      <div className="trendbx">
        <div>
          <div className="trendimg">
            <img src="/images/trending1.jpg" />
          </div>
          <h4>Digital</h4>
          <Link href="/blogs">Defending Your X...</Link>
        </div>
        <div>
          <div className="trendimg">
            <img src="/images/trending2.jpg" />
          </div>
          <h4>Experiential Marketing</h4>
          <Link href="/blogs">Defending Your X...</Link>
        </div>
        <div>
          <div className="trendimg">
            <img src="/images/trending1.jpg" />
          </div>
          <h4>Experiential Marketing</h4>
          <Link href="/blogs">Then New App In Town - Hello Instagram Threads</Link>
        </div>
      </div>
    </div>
    <Link href="/blogs" className="explore ">
      Explore More <i className="ri-arrow-right-line" />
    </Link>
  </div>
  {/*-------------- Trending Section Codes End From Here -------------*/}
  {/*-------------- Subscribe Section Codes Start From Here -------------*/}
  <Subscriber/>
  {/*-------------- Subscribe Section Codes End From Here -------------*/}
  {/*-------------- Footer Section Codes Start From Here -------------*/}
 <Footer/>
  {/*-------------- Footer Section Codes End From Here -------------*/}
  {/* Swiper JS */}
  {/* Aos Animation */}
  {/* Initialize Swiper */}
  {/* Sub-Mega Menus Script */}
  {/* For Remove Before Icon */}
</>

      
   
  );
}

export default WhoWeAre;