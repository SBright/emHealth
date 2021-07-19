import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Parallax, { Layer } from "react-parallax-scroll";
import { BrowserView, MobileView } from "react-device-detect";
import Fade from 'react-reveal/Fade';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import img_arrow from '../assets/images/arrow.svg';
import img_main_1 from '../assets/images/image1.png';
import img_main_2 from '../assets/images/image2.png';
import img_main_3 from '../assets/images/image3.png';
import img_main_4 from '../assets/images/image4.png';
import img_logo_footer from '../assets/images/logo-footer.svg';
import img_ig from '../assets/images/IG.svg';
import img_fb from '../assets/images/face.svg';
import img_lk from '../assets/images/linkedin.svg';
import video_main from '../assets/video/emBorrow_Banner.mp4';

const Home = () => {

    const history = useHistory();

    const [contact_modal_open, setContactModalOpen] = useState(false);

    const contact_modal = (e) => {
        e.preventDefault(); 
        setContactModalOpen(true); 
        setTimeout(() => {
            setContactModalOpen(false);
        }, 100);  
    }

    return (
        <Parallax>
            <header className="header-area header-area ">
                <Navbar modalStatus={contact_modal_open}></Navbar>
                <div className="header-content-area header-content-area ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="header-content header-content animate__animated animate__slideInUp animate__delay-0.2s">
                                    <h1 className="header-title">Take Control of Your Fertility Journey</h1>
                                    <p>Our platform empowers you via fertility education, know-how, planning, and financing. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-banner-bg bg_cover d-lg-block">
                        <video autoPlay muted loop id="myVideo">
                            <source src={video_main} type='video/mp4' />
                        </video>
                    </div>
                </div>
            </header>
            {/* partners Part starts */}
            <section className="partners-area partners desk_view">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="partners-image">
                                <img src={img_main_1} alt="partners" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="partners-content">
                                <div className="partners_inn">
                                    <Fade right duration={3000}>
                                        <div className="section-title mt-45">
                                            <h1 className="title">Partners</h1>
                                        </div>
                                    </Fade>
                                    <Fade duration={3000}>
                                        <div className="content_section">
                                            <p>Whether you are a healthcare provider, a social influencer, or a wellness subject-matter expert,
                                                consider
                                                joining our group of professionals dedicated to fertility, reproductive health, and pregnancy! We
                                                always
                                                seek to expand the value we provide to our community members.</p>
                                            <div className="btn-section">
                                                <h4><a href="#" onClick={(e) => contact_modal(e) }> Contact Us<span><img src={img_arrow} alt="" /></span></a></h4>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners-area partners mob_view">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="partners-content">
                                <div className="partners_inn">
                                    <div className="section-title mt-45">
                                        <h1 className="title">Partners</h1>
                                    </div>
                                    <div className="content_section">
                                        <p>Whether you are a healthcare provider, a social influencer, or a wellness subject-matter expert,
                                            consider
                                            joining our group of professionals dedicated to fertility, reproductive health, and pregnancy! We
                                            always
                                            seek to expand the value we provide to our community members.</p>
                                        <div className="btn-section">
                                            <h4><a href="#" onClick={(e) => contact_modal(e) }> Contact Us<span><img src={img_arrow} alt="" /></span></a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="partners-image"> <img src={img_main_1} alt="partners" /> </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Members Part starts */}
            <section className="members-area members pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="members-content">
                                <div className="members_inn">
                                    <BrowserView>
                                        <Fade left duration={3000}>
                                            <div className="section-title mt-45">
                                                <h1 className="title">Members</h1>
                                            </div>
                                        </Fade>
                                    </BrowserView>
                                    <MobileView>
                                        <div className="section-title mt-45">
                                            <h1 className="title">Members</h1>
                                        </div>
                                    </MobileView>
                                    <BrowserView>
                                        <Fade duration={3000}>
                                            <div className="content_section">
                                                <p>In everything we do, we believe that by helping women and couples take control of their fertility
                                                    health you empower their personal and professional goals. We created emHealth to overcome the
                                                    challenges
                                                    you may be facing. Lack of centralized, curated information? No readily available tools? We started
                                                    emHealth based on the challenges we have faced during our own journey.</p>
                                                <div className="btn-section">
                                                    <h4><a href="" onClick={(e) => { e.preventDefault(); history.push('/why-us') }}> Learn Why<span><img src={img_arrow} alt="" /></span></a></h4>
                                                </div>
                                            </div>
                                        </Fade>
                                    </BrowserView>
                                    <MobileView>
                                        <div className="content_section">
                                            <p>In everything we do, we believe that by helping women and couples take control of their fertility
                                                health you empower their personal and professional goals. We created emHealth to overcome the
                                                challenges
                                                you may be facing. Lack of centralized, curated information? No readily available tools? We started
                                                emHealth based on the challenges we have faced during our own journey.</p>
                                            <div className="btn-section">
                                                <h4><a href="" onClick={(e) => { e.preventDefault(); history.push('/why-us') }}> Learn Why<span><img src={img_arrow} alt="" /></span></a></h4>
                                            </div>
                                        </div>
                                    </MobileView>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="members-image">
                                <BrowserView>
                                    <img src={img_main_2} alt="partners" />
                                </BrowserView>
                                <MobileView>
                                    <img src={img_main_2} alt="partners" />
                                </MobileView>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* partners Part starts */}
            <section className="emclass-area emclass desk_view">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="emclass-image">
                                <img src={img_main_3} alt="partners" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="emclass-content">
                                <div className="emclass_inn">
                                    <Fade right duration={3000}>
                                        <div className="section-title mt-45">
                                            <h1 className="title">emClass</h1>
                                        </div>
                                    </Fade>
                                    <Fade duration={3000}>
                                        <div className="content_section">
                                            <p>Walk through your journey of knowledge and personal growth with classes provided by people you trust.
                                                From lifestyle choices to medical science, you will be able to learn and better your life. Thanks to
                                                courses taught by clinical subject-matter experts and influencers who have shared similar struggles,
                                                you will have access to a wide variety of content. No matter how much you know today, enjoy this
                                                learning
                                                experience with your advisors who will share their crafts, medical knowledge, and personal
                                                experiences.</p>
                                            <div className="btn-section">
                                                <h4><a target="_blank" href='/emclass'>Learn More<span><img src={img_arrow} alt="" /></span></a></h4>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="emclass-area emclass mob_view">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="emclass-content">
                                <div className="emclass_inn">
                                    <div className="section-title mt-45">
                                        <h1 className="title">emClass</h1>
                                    </div>
                                    <div className="content_section">
                                        <p>Walk through your journey of knowledge and personal growth with classes provided by people you trust.
                                            From lifestyle choices to medical science, you will be able to learn and better your life. Thanks to
                                            courses taught by clinical subject-matter experts and influencers who have shared similar struggles,
                                            you will have access to a wide variety of content. No matter how much you know today, enjoy this
                                            learning
                                            experience with your advisors who will share their crafts, medical knowledge, and personal
                                            experiences.</p>
                                        <div className="btn-section">
                                            <h4><a href="" target="_blank" href='/emclass'>Learn More<span><img src={img_arrow} alt="" /></span></a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="emclass-image"> <img src={img_main_3} alt="partners" /> </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Members Part starts */}
            <section className="emborrow-area emborrow pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="emborrow-content">
                                <div className="emborrow_inn">
                                    <BrowserView>
                                        <Fade left duration={3000}>
                                            <div className="section-title mt-45">
                                                <h1 className="title">emBorrow</h1>
                                            </div>
                                        </Fade>
                                    </BrowserView>
                                    <MobileView>
                                        <div className="section-title mt-45">
                                            <h1 className="title">emBorrow</h1>
                                        </div>
                                    </MobileView>
                                    <BrowserView>
                                        <Fade duration={3000}>
                                            <div className="content_section">
                                                <p>This financial service by emHealth is here to help our community with fertility-related costs.
                                                    Going through medical procedures and wellness programs can be quite costly and not everyonecan afford
                                                    them.
                                                    We believe that people deserve a chance to pursue whatever journey they decide is best for them.
                                                    emBorrow offers
                                                    financing that is as comprehensive as possible and tailored to you.</p>
                                                <div className="btn-section">
                                                    <h4><a target="_blank" href="https://emborrow.com/">Learn More<span><img src={img_arrow} alt="" /></span></a></h4>
                                                </div>
                                            </div>
                                        </Fade>
                                    </BrowserView>
                                    <MobileView>
                                        <div className="content_section">
                                            <p>This financial service by emHealth is here to help our community with fertility-related costs.
                                                Going through medical procedures and wellness programs can be quite costly and not everyonecan afford
                                                them.
                                                We believe that people deserve a chance to pursue whatever journey they decide is best for them.
                                                emBorrow offers
                                                financing that is as comprehensive as possible and tailored to you.</p>
                                            <div className="btn-section">
                                                <h4><a target="_blank" href="https://emborrow.com/">Learn More<span><img src={img_arrow} alt="" /></span></a></h4>
                                            </div>
                                        </div>
                                    </MobileView>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="emborrow-image">
                                <BrowserView>
                                    <img src={img_main_4} alt="partners" />
                                </BrowserView>
                                <MobileView>
                                    <img src={img_main_4} alt="partners" />
                                </MobileView>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FOOTER PART START */}
            <footer id="footer" className="footer-area footer">
                <div className="footer-widget widget  pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 order-md-0 order-lg-0">
                                <div className="widget-partners pt-30">
                                    <a onClick={(e) => { e.preventDefault(); history.push('/') }} href="#"> <img src={img_logo_footer} alt="Logo" className="pb-30" /> </a>
                                    <nav className="nav-footer justify-content-center">
                                        <a onClick={(e) => { e.preventDefault(); history.push('/why-us') }} href="#">Why emHealth</a>
                                        <a  href="#" onClick={(e) => contact_modal(e) }>Contact Us</a> </nav>
                                    <nav className="nav-footer justify-content-center pt-20"> 
                                        <a target="_blank" href="https://www.instagram.com/emborrow/"><img src={img_ig} alt="" /></a> 
                                        <a target="_blank" href="https://www.facebook.com/emBorrow/"><img src={img_fb} alt="" /></a> 
                                        <a target="_blank" href="https://www.linkedin.com/company/emborrow/"><img src={img_lk} alt="" /></a> 
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright copyright pb-15">
                    <div className="copyright ">
                        <p>© 2021 emHealth. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </Parallax>
    )
}

export default Home;