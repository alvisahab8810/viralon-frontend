import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="footer-container" id="footer">
        <div className="container1">
          <div className="footerbx">

            <div>
              <Link className="footer-logo" href="#">
                <img src="/themes/viralon/images/logo.png" width="120" alt="website logo" />
              </Link>
              {/* <!-- <h2 className="f-heading">VIRALON DIGITAL SERVICES</h2> --> */}
              <ul className="ctabx">
                <li>Mail:<Link href="mailto:">info@viralon.in</Link></li>
                <li>Tel:<Link href="tel:9305451301">+91 93054 51301</Link></li>

              </ul>
              <p className="c-para">Connect With Us</p>
              <ul className="social-bx">
                <li><Link href="https://www.instagram.com/viralon_digital_services/?igsh=aHV4bGZkdGIwYXpk&utm_source=qr"><i className="ri-instagram-fill"></i></Link></li>
                <li><Link href="https://www.facebook.com/profile.php?id=61551774960535&mibextid=LQQJ4d"><i className="ri-facebook-fill"></i></Link></li>
                {/* <li><Link href="#"><img src="/themes/viralon/images/icons/twitter.png" alt="Twitter Icon" /></Link></li> */}
                <li><Link href="https://www.linkedin.com/company/viralon-digital-services/"><i className="ri-linkedin-fill"></i></Link></li>
                <li><Link href="https://www.youtube.com/@ViralonDigtialServices">  <i className="ri-youtube-fill"></i></Link></li>

              </ul>
            </div>

            <div>


              <ul className="footer-nav">
                <h3 className="h3 ">Links</h3>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us/who-we-are">About us</Link></li>
                <li><Link href="/services/strategy/digital-transformation">Services</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="h3 m-h">Strategy</h3>
              <ul className="digital-links">

                <li><Link href="/services/strategy/digital-transformation">Digital Transformation</Link></li>
                <li><Link href="/services/strategy/technology-consulting">Technology Consulting</Link></li>
              </ul>
            </div>


            <div>
              <ul className="services-nav">
                <h3 className="h3">Digital</h3>
                <li><Link href="/services/digital/social-media-marketing">Social Media Marketing</Link></li>
                <li><Link href="/services/digital/paid-media-marketing">Paid Media Marketing</Link></li>
                <li><Link href="/services/digital/search-engine-optimization">Search Engine Optimization</Link></li>
                <li><Link href="/services/digital/content-marketing">Content Marketing</Link></li>
                <li><Link href="/services/digital/email-marketing">Email Marketing</Link></li>
                <li><Link href="/services/digital/influencer-marketing">Influencer Marketing</Link></li>
                <li><Link href="/services/digital/analytics-report">Analytics/Reporting</Link></li>
                <li><Link href="/services/digital/video-marketing">Video Marketing</Link></li>
              </ul>
            </div>


            <div>
              <ul className="services-nav">
                <h3 className="h3">Design</h3>
                <li><Link href="/services/design/ui-ux">UI/UX</Link></li>
                <li><Link href="/services/design/logo-design">Logo Design</Link></li>
                <li><Link href="/services/design/brocher-design">Brochure</Link></li>
                <li><Link href="/services/design/product-level-design">Product Label Design</Link></li>
                <li><Link href="/services/design/infographics">Infographics</Link></li>
              </ul>
            </div>

            <div>

              <ul className="services-nav">
                <h3 className="h3">Industries</h3>
                <li><Link href="/industries/banking-and-finance">Banking &amp; Finance</Link></li>
                <li><Link href="/industries/food-industries">Food Industry</Link></li>
                <li><Link href="/industries/travel-industries">Travel Industry</Link></li>
                <li><Link href="/industries/e-commerce-industries">E-commerce Industry</Link></li>
                <li><Link href="/industries/it-industries">IT Industry</Link></li>
                <li><Link href="/industries/personal-care-industries">Personal-Care Industry</Link></li>
                <li><Link href="/industries/healthcare-and-wellness">Health care &amp; Wellness Industry</Link></li>
                <li><Link href="/industries/education-industries">Education Industry</Link></li>
                <li><Link href="/industries/real-estate-industries">Real-Estate Industry</Link></li>


              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <footer>
          <div>
            <ul className="footer-menu">
              <li><Link href="#">Sitemap</Link></li>
              <li><Link href="/privacy-policy">Privacy</Link></li>
              <li><Link href="#">Cookie</Link></li>
              <li><Link href="#">Policy Terms of Use</Link></li>
            </ul>
          </div>
          <div>
            <p>© Copyright 2023 Viralon Digtial Services</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;