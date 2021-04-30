import React from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Banner5 from "../components/banner/banner5/Banner5";
import ImageBox from "../components/about/ImageBox";
import About2 from "../components/about/About2";
import FunFactsThree from "../components/other/funfacts/FunFactsThree";
import {Link} from "react-router-dom";
import { FiPlus } from 'react-icons/fi'
import SectionsHeading from "../components/common/SectionsHeading";
import Testimonial from "../components/sliders/Testimonial";
import HowItWork4 from "../components/hiw/HowItWork4";
import TeamOne from "../components/team/TeamOne";
import Button from "../components/common/Button";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import sectiondata from "../store/store";

function acupuncturePoint() {
    return (
        <main className="about-page">
            {/* Header */}
            <GeneralHeader />

            {/* Banner */}
            <Banner5 />

            <section className="blog-area padding-top-50px padding-bottom-80px before-none after-none">
                <div className="container">
               
                </div>
            </section>

            <section className="about-area padding-bottom-100px">
                <div className="container">
                
                </div>
            </section>


            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default acupuncturePoint;
