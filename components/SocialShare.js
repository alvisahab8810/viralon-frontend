import Link from "next/link";

const SocialShare = () => {
  return (
    <>
      <div className="business-enquiry open-btn mob-none">
        <Link href="/contact-us">
          <span>Get a Quote</span>
        </Link>
      </div>

      {/* <ul className="social-bx1">
        <li><Link href="https://www.instagram.com/viralon_digital_services/?igsh=aHV4bGZkdGIwYXpk&utm_source=qr"><i className="ri-instagram-fill"></i></Link></li>
        <li><Link href="https://www.facebook.com/profile.php?id=61551774960535&mibextid=LQQJ4d"><i className="ri-facebook-fill"></i></Link></li>
        <li><Link href="#"><img src="/themes/viralon/images/icons/twitter.png" alt="Twitter Icon" /></Link></li>
        <li><Link href="https://www.linkedin.com/company/viralon-digital-services/"><i className="ri-linkedin-fill"></i></Link></li>
        <li><Link href="https://www.youtube.com/@ViralonDigtialServices">  <i className="ri-youtube-fill"></i></Link></li>
      </ul> */}

    </>
  );
}

export default SocialShare;