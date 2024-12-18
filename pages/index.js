// pages/index.js
import React from "react";
import Home from "../components/Home";
import Layout from "../components/Layout";
import { getData } from "../controllers/indexController";
import Header from "../components/Header";
import Specilalisation from "../components/Specialisation";
import Works from "../components/Works";
import Clients from "../components/Clients";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
import SocialShare from "../components/SocialShare";
import Subscriber from "../components/Subscriber";
import SwiperSliders from "../components/SwiperSliders";
import CustomHead from "../components/CustomHead";
import SpecialBox from "../components/SpecialBox";

// export async function getServerSideProps() {
//   const data = await getData();
//   return {
//     props: { data },
//   };
// }

export default function IndexPage({ data }) {
  return (
    <section id="home">
      <CustomHead
        title="Viralon | Best Digital Marketing Agency htmlFor Revenue Growth"
        keywords="Viralon, Digital Marketing Agency"
        description="Viralon is the best digital marketing agency in India htmlFor revenue growth. Elevate your online presence with our expert strategies and innovative solutions."
      />

      <Header />
      {/* Social Icons */}

      <SocialShare />

      {/* <!---------------- Hero Section Codes Start From Here ---------------> */}
      {/* <HeroNew /> */}
      <SwiperSliders />
      {/* <!---------------- Hero Section Codes End From Here ---------------> */}

      {/* <!-- strip start here --> */}
      <div className="strip-section">
        <h2 className="our-brands">your Brand{"'"}s BFF</h2>
      </div>
      {/* <!-- strip End here --> */}
      <div className="container1">
        <div className="col-md-12 m-auto">
          <h1 className="text-center h2-h">WE ARE VIRALON</h1>
          <p className="text-dark text-center max-width600 pb-15">
            At Viralon, we believe in delivering exceptional client-centric
            solutions that build trust and deliver the best results. Turbocharge
            your digital presence and reap the rewards of the digital era.
            Crafting your online presence goes beyond mere necessity; it{"'"}s
            an art htmlForm, and we are dedicated to transhtmlForming each interaction
            into a masterpiece. htmlFor us, it{"'"}s a collaborative journey towards
            achieving digital excellence and raising the curtain on your brand
            {"'"}s digital transhtmlFormation.
          </p>
        </div>
      </div>
      {/* <!---------------- Our Specilalization Section Codes Start From Here ---------------> */}
      <Specilalisation />
      {/* <!---------------- Our Specilalization Section Codes End From Here ---------------> */}
      <Works />
      <Clients />
      {/* <Trending /> */}
      <SpecialBox/>

      {/* <!---------------- Subscribe Section Codes Start From Here ---------------> */}
      <Subscriber />

      {/* <!---------------- Footer Section Codes Start From Here ---------------> */}
      <Footer />
    </section>
  );
}
