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
                <br></br>
                <br></br>
                <br></br>
                <p>Acupuncture (zhēnjiǔ) of Traditional Chinese Medicine 针灸</p>
                <div class="form-group">
							<label for="meridians">Meridians</label>
							<div class="position-relative">
							  <select name="meridians" class="custom-select" id="meridians" required >
								<option selected value="">Select a Meridian</option>
								<option id="Hand Yin Lung Meridian (LU)" value="Hand Yin Lung Meridian (LU) (手太阴肺经穴, 手太陰肺經)">Hand Yin Lung Meridian (LU) (手太阴肺经穴, 手太陰肺經)</option>
								<option id="Hand Yang Large Intestine Meridian (LI)"  value="Hand Yang Large Intestine Meridian (LI) (手阳明大肠经穴, 手陽明大腸經)">Hand Yang Large Intestine Meridian (LI) (手阳明大肠经穴, 手陽明大腸經)</option>
								<option id="Foot Yang Stomach Meridian (ST)" value="Foot Yang Stomach Meridian (ST) (足阳明胃经穴, 足陽明胃經)">Foot Yang Stomach Meridian (ST) (足阳明胃经穴, 足陽明胃經)</option>
								<option id="Foot Yin Spleen Meridian (SP)" value="Foot Yin Spleen Meridian (SP) (足太阴睥经穴, 足太陰脾經)">Foot Yin Spleen Meridian (SP) (足太阴睥经穴, 足太陰脾經)</option>
								<option id="Hand Yin Heart Meridian (HT)" value="Hand Yin Heart Meridian (HT) (手少阴心经穴, 手少陰心經)">Hand Yin Heart Meridian (HT) (手少阴心经穴, 手少陰心經)</option>
								<option id="Hand Yang Small Intestine Meridian (SI)" value="Hand Yang Small Intestine Meridian (SI) (手太阳小肠经穴, 手太陽小腸經)">Hand Yang Small Intestine Meridian (SI) (手太阳小肠经穴, 手太陽小腸經)</option>
								<option id="Foot Yang Urinairy Bladder Meridian (UB" value="Foot Yang Urinairy Bladder Meridian (UB) (足太阳膀胱经穴, 足太陽膀胱經)">Foot Yang Urinairy Bladder Meridian (UB) (足太阳膀胱经穴, 足太陽膀胱經)</option>
								<option id="Foot Yin Kidney Meridian (KI)" value="Foot Yin Kidney Meridian (KI) (足少阴肾经穴, 足少陰腎經)">Foot Yin Kidney Meridian (KI) (足少阴肾经穴, 足少陰腎經)</option>
								<option id="Hand Yin Pericardium Meridian (PC)" value="Hand Yin Pericardium Meridian (PC) (手厥阴心包经穴, 手厥陰心包經)">Hand Yin Pericardium Meridian (PC) (手厥阴心包经穴, 手厥陰心包經)</option>
								<option id="Hand Yang San Jiao Meridian (SJ)" value="Hand Yang San Jiao Meridian (SJ) (手少阳三焦经穴, 手少陽三焦經)">Hand Yang San Jiao Meridian (SJ) (手少阳三焦经穴, 手少陽三焦經)</option>
								<option id="Foot Yang Gall Bladder Meridian (GB)" value="Foot Yang Gall Bladder Meridian (GB) (足少阳胆经穴, 足少陽膽經)">Foot Yang Gall Bladder Meridian (GB) (足少阳胆经穴, 足少陽膽經)</option>
								<option id="Foot Yin Liver Meridian (LV)" value="Foot Yin Liver Meridian (LV) (足厥阴肝经穴, 足厥陰肝經)">Foot Yin Liver Meridian (LV) (足厥阴肝经穴, 足厥陰肝經)</option>
								<option id="The Governing Vessel (DU), Du Channel" value="The Governing Vessel (DU), Du Channel (督脉穴, 督脈)">The Governing Vessel (DU), Du Channel (督脉穴, 督脈)</option>
								<option id="The Conception Vessel (REN), Ren Channel" value="The Conception Vessel (REN), Ren Channel (任脉穴, 任脈)">The Conception Vessel (REN), Ren Channel (任脉穴, 任脈)</option>
								<option id="Extra Points of the Head and Neck, EX-HN" value="Extra Points of the Head and Neck, EX-HN">Extra Points of the Head and Neck, EX-HN</option>
								<option id="Extra Points of Lower Extremities, EX-LE" value="Extra Points of Lower Extremities, EX-LE">Extra Points of Lower Extremities, EX-LE</option>
								<option id="Extra Points of Upper Extremities, EX-UE" value="Extra Points of Upper Extremities, EX-UE">Extra Points of Upper Extremities, EX-UE</option>
								<option id="Extra Points of Back, EX-B" value="Extra Points of Back, EX-B">Extra Points of Back, EX-B</option>
								<option id="Extra Points of the Chest and Abdomen, EX-CA" value="Extra Points of the Chest and Abdomen, EX-CA">Extra Points of the Chest and Abdomen, EX-CA</option>
								<option id="Extra points" value="Extra points">Extra points</option>
							  </select>
							
						</div>
                        </div>
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
