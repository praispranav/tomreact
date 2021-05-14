import React,{useEffect,useState, useContext} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import BlogSidebar from "../../components/sidebars/BlogSidebar";
import BlogFullWidthItems from "../../components/blogs/BlogFullWidthItems";
import MeridianHandler from "../../components/blogs/MeridianHandler";
import Pagination from "../../components/blogs/Pagination";
// import MeridianHandler from "./MeridianHandler"

import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import bg from "../../assets/images/custom/bg.jpg"

import flag1 from "../../assets/images/custom/flag1.jpg"
import { UserContext } from '../../App';

function BlogFullWidth() {
    const context = useContext(UserContext)
    return (
        <main className="blog-fullwidth-page">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Accupunture" MenuPgTitle="Blog" img={bg} />
            <div style={{textAlign:"center"}}>
                <p style={{color:"red"}}>The only database of acupuncture out there!</p>
                <h1>Acupuncture (zhēnjiǔ) of Traditional Chinese Medicine 针灸</h1>
            </div>
            <section className="blog-grid padding-top-40px padding-bottom-50px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <img src={flag1} className="imgstyle" />
                        </div>
                        <div className="col-lg-6"  style={{marginTop:"4em", fontSize:"20px"}}>
                            <p>
                            Looking for information about Acupuncture ? <br /><br />
                            Browse our database. Share your knowledge, ideas and feedback on the efficacy of Acupuncture.
                            View, give feedback to and vote on others’ contributions.<br /> <br />
                            See what is missing and help us to make our knowledge database grow by signup for an account.<br /> <br />
                            Browse the name of the acupuncture-point by choosing the alphabet. Or choose the Meridian by picking from the dropdown-menu.
                            </p>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </section>
            <Pagination />
            <br />
            <div style={{textAlign:"center"}}>
                <p>Active Filter: {context.state.activeFilter}</p>
            </div>
            <section className="blog-grid padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <BlogFullWidthItems  />
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            {/* <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} /> */}

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default React.memo(BlogFullWidth);
