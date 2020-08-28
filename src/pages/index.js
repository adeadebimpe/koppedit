import React from "react"
import Navigation from "../components/nav/nav"
import Header from "../components/header";
import Howitworks from "../components/howitworks/howitworks";
import WhyChooseUs from "../components/whychooseus/whychooseus";
import CTA from "../components/cta";
import Footer from "../components/footer";
import FAQ from "../components/faq/faq";


//styles
import '../style/normalize.scss';
import '../style/style.scss';


import mobileImage from '../images/GADGET.png';


export default function Home() {
  return <main>
    <Navigation />
    <Header />
    <Howitworks />
    <img src={mobileImage} alt="Group of Gadgets" className="mobile-image" />
    <WhyChooseUs />
    <FAQ />
    <CTA />
    <Footer />
  </main>
}
