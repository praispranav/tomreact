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

function Acupuncture() {
    return (
        <main className="about-page">
            {/* Header */}
            <GeneralHeader />

            {/* Banner */}
            <Banner5 />

           

            <section className="about-area padding-bottom-100px">
                <div className="container">
                <p>Acupuncture (zhēnjiǔ) of Traditional Chinese Medicine 针灸</p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo<br></br>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo<br></br>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo<br></br>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo<br></br>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo<br></br>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo<br></br>
                </div>
            </section>

            <section className="funfact-area section-bg before-none after-none padding-top-100px padding-bottom-100px text-left">
                <div className="container">
                
                    <div className="row">
                        <div className="col-lg-3 column-td-6 mx-auto">
                            <div className="cta-text-box mt-4">
                                <Link to="/add-listing/new" className="d-flex justify-content-center align-items-center">
                                    Post your topic
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

       

           
         

            {/* NewsLetter */}
            {/* <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} /> */}

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default Acupuncture;
