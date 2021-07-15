import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Parallax, { Layer } from "react-parallax-scroll";
import { BrowserView, MobileView } from "react-device-detect";
import Navbar from '../components/Navbar/Navbar';
import Fade from 'react-reveal/Fade';
import img_logo from '../assets/images/logo.svg';
import img_arrow_dark from '../assets/images/arrow-dark.svg';
import img_main_1 from '../assets/images/image1.png';
import img_im1 from '../assets/images/im1.png';
import img_im2 from '../assets/images/im2.png';
import img_im3 from '../assets/images/im3.png';
import img_im4 from '../assets/images/im4.png';
import img_logo_footer from '../assets/images/logo-footer.svg';
import img_ig from '../assets/images/IG.svg';
import img_fb from '../assets/images/face.svg';
import img_lk from '../assets/images/linkedin.svg';

const Why = () => {

    const history = useHistory();

    return (
        <Parallax>
            {/* HEADER PART START */}
            <header className="header-area header-area_inn_pages">
                <Navbar></Navbar>
            </header>
            {/* partners Part starts */}
            <section className="partners-area partners_inpage desk_view">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="partners-image">
                                <Layer settings={{ speed: -0.2, type: ["translateX"] }}>
                                    <img src={img_main_1} alt="partners" />
                                </Layer>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="partners-content">
                                <div className="partners_inn">
                                    <Fade right duration={3000}>
                                        <div className="section-title mt-45">
                                            <h1 className="title">Why emHealth</h1>
                                        </div>
                                    </Fade>
                                    <Fade duration={3000}>
                                        <div className="content_section">
                                            <p>In everything we do, we believe that by helping women and couples take control of their fertility,
                                                you empower them to achieve their personal and professional aspirations.<br />
                                                <br />
                                                emHealth is the vision behind all the parts of our platform – to transform society and industry in
                                                terms of
                                                fertility and reproductive health via the education, know-how and tools that millions of women and
                                                couples need.</p>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners-area partners_inpage mob_view">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="partners-content">
                                <div className="partners_inn">
                                    <div className="section-title mt-45">
                                        <h1 className="title">Why emHealth</h1>
                                    </div>
                                    <div className="content_section">
                                        <p>In everything we do, we believe that by helping women and couples take control of their fertility,
                                            you empower them to achieve their personal and professional aspirations.<br />
                                            <br />
                                            emHealth is the vision behind all the parts of our platform – to transform society and industry in
                                            terms of
                                            fertility and reproductive health via the education, know-how and tools that millions of women and
                                            couples need.</p>
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
            <section className="personal-area ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="personal-content ">
                                <div className="personal_inn">
                                    <div className="section-title mt-45">
                                        <BrowserView>
                                            <Fade left duration={3000}>
                                                <h1 className="title">Kati’s personal fertility journey </h1>
                                            </Fade>
                                        </BrowserView>
                                        <MobileView>
                                            <h1 className="title">Kati’s personal fertility journey </h1>
                                        </MobileView>
                                    </div>
                                    <div className="content_section ">
                                        <BrowserView>
                                            <Fade duration={6000}>
                                                <p>I knew I always wanted to have children, but by the age of 35 I was still not at the point in my
                                                    personal life
                                                    where I was ready to have children. I had heard about egg freezing in the past but did not have much
                                                    information
                                                    about it. At the end of the day, I found myself without support. I finally took courage to attend a
                                                    talk about
                                                    egg freezing at a local fertility clinic. During that event I learned about a fertility test that
                                                    could provide
                                                    you with your “fertility age.” In layman’s terms, “fertility age” meant that just because you are 35
                                                    years old,
                                                    your fertility may not be 35 years old. <br />
                                                    <br />
                                                    After taking the test, I learned that I had low egg reserve for a female of my age. I was asked by the
                                                    nurse
                                                    “why did you take this test?” to which I responded, “I was thinking of freezing my eggs.” The nurse
                                                    then told
                                                    me “this would be the right time to do that. It’s always the sooner, the better”. <br />
                                                    <br />
                                                    I didn’t really know what all went into the process of freezing my eggs, but I knew I had to proceed
                                                    because
                                                    I never wanted to be told I missed my window of opportunity to have children. Freezing my eggs was in
                                                    a way
                                                    my “insurance policy” since this was the best way to preserve my fertility, and stop the anxiety that
                                                    comes
                                                    along with my “biological clock ticking.” </p>
                                            </Fade>
                                        </BrowserView>
                                        <MobileView>
                                            <p>I knew I always wanted to have children, but by the age of 35 I was still not at the point in my
                                                personal life
                                                where I was ready to have children. I had heard about egg freezing in the past but did not have much
                                                information
                                                about it. At the end of the day, I found myself without support. I finally took courage to attend a
                                                talk about
                                                egg freezing at a local fertility clinic. During that event I learned about a fertility test that
                                                could provide
                                                you with your “fertility age.” In layman’s terms, “fertility age” meant that just because you are 35
                                                years old,
                                                your fertility may not be 35 years old. <br />
                                                <br />
                                                After taking the test, I learned that I had low egg reserve for a female of my age. I was asked by the
                                                nurse
                                                “why did you take this test?” to which I responded, “I was thinking of freezing my eggs.” The nurse
                                                then told
                                                me “this would be the right time to do that. It’s always the sooner, the better”. <br />
                                                <br />
                                                I didn’t really know what all went into the process of freezing my eggs, but I knew I had to proceed
                                                because
                                                I never wanted to be told I missed my window of opportunity to have children. Freezing my eggs was in
                                                a way
                                                my “insurance policy” since this was the best way to preserve my fertility, and stop the anxiety that
                                                comes
                                                along with my “biological clock ticking.” </p>
                                        </MobileView>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6  ">
                            <div className="personal-image">
                                <BrowserView>
                                    <Layer settings={{ speed: 0.2, type: ["translateX"] }}>
                                        <img src={img_im1} alt="" />
                                    </Layer>
                                </BrowserView>
                                <MobileView>
                                    <img src={img_im1} alt="" />
                                </MobileView>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="during-area desk_view">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="during-image">
                                <BrowserView>
                                    <Layer settings={{ speed: -0.2, type: ["translateX"] }}>
                                        <img src={img_im2} alt="partners" />
                                    </Layer>
                                </BrowserView>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="during-content">
                                <div className="during-inn">
                                    <Fade right duration={3000}>
                                        <div className="section-title">
                                            <h1 className="title">“During my first treatment, however, I did not know much of what to expect."</h1>
                                        </div>
                                    </Fade>
                                    <Fade duration={3000}>
                                        <div className="content_section">
                                            <p>I ended up undergoing three rounds of fertility treatments with three successful egg retrievals.
                                                During my first
                                                treatment, however, I did not know much of what to expect. I was provided with links to videos on how
                                                to
                                                administer the shots, but other than that I had no idea what I was putting my body through, how the
                                                process
                                                worked, how long I would be on the shots, the monitoring that would take place through the cycle, the
                                                actual
                                                retrieval of my eggs, etc. <br />
                                                <br />
                                                It wasn’t until my third round of fertility treatment that I felt like a pro. I knew exactly what
                                                to expect in terms of the injectable medications, how I would physically feel during the process, the
                                                monitoring of my ovaries and the egg retrieval. <br />
                                                <br />
                                                Many women freezing their eggs, however, won’tbe going through three rounds of treatment and honestly,
                                                before you start the first round, you want to know exactly what the process will be. This is one of
                                                main
                                                reasons that I wanted to start emHealth. </p>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="during-area mob_view">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="during-content">
                                <div className="during-inn">
                                    <div className="section-title">
                                        <h1 className="title">“During my first treatment, however, I did not know much of what to expect."</h1>
                                    </div>
                                    <div className="content_section">
                                        <p>I ended up undergoing three rounds of fertility treatments with three successful egg retrievals.
                                            During my first
                                            treatment, however, I did not know much of what to expect. I was provided with links to videos on how
                                            to
                                            administer the shots, but other than that I had no idea what I was putting my body through, how the
                                            process
                                            worked, how long I would be on the shots, the monitoring that would take place through the cycle, the
                                            actual
                                            retrieval of my eggs, etc. <br />
                                            <br />
                                            It wasn’t until my third round of fertility treatment that I felt like a pro. I knew exactly what
                                            to expect in terms of the injectable medications, how I would physically feel during the process, the
                                            monitoring of my ovaries and the egg retrieval. <br />
                                            <br />
                                            Many women freezing their eggs, however, won’tbe going through three rounds of treatment and honestly,
                                            before you start the first round, you want to know exactly what the process will be. This is one of
                                            main
                                            reasons that I wanted to start emHealth. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="during-image"> <img src={img_im2} alt="partners" /> </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="emclass-inpage-area emclass-inpage pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="emclass-inpage-content">
                                <div className="emclass-inpage_inn">
                                    <BrowserView>
                                        <Fade left duration={3000}>
                                            <div className="section-title mt-45">
                                                <h1 className="title">emClass</h1>
                                            </div>
                                        </Fade>
                                    </BrowserView>
                                    <MobileView>
                                        <div className="section-title mt-45">
                                            <h1 className="title">emClass</h1>
                                        </div>
                                    </MobileView>
                                    <BrowserView>
                                        <Fade duration={3000}>
                                            <div className="content_section">
                                                <p>The mission of emClass is to nurture our members’ knowledge in terms of fertility and reproductive
                                                    health, and
                                                    promote positive lifestyle choices while nurturing a community made of people who share similar
                                                    challenges and
                                                    goals.<br />
                                                    <br />
                                                    Through guidance videos and classes that gradually increase in difficulty and mastery, the plan is to
                                                    create
                                                    a journey of knowledge for our members. One in which they learn all sorts of valuable skills (varying
                                                    from
                                                    medical expertise, and cooking to fitness and mental health) and arm themselves with tools and
                                                    information that
                                                    they ́ll get to use to achieve their personal goals. </p>
                                            </div>
                                        </Fade>
                                    </BrowserView>
                                    <MobileView>
                                        <div className="content_section">
                                            <p>The mission of emClass is to nurture our members’ knowledge in terms of fertility and reproductive
                                                health, and
                                                promote positive lifestyle choices while nurturing a community made of people who share similar
                                                challenges and
                                                goals.<br />
                                                <br />
                                                Through guidance videos and classes that gradually increase in difficulty and mastery, the plan is to
                                                create
                                                a journey of knowledge for our members. One in which they learn all sorts of valuable skills (varying
                                                from
                                                medical expertise, and cooking to fitness and mental health) and arm themselves with tools and
                                                information that
                                                they ́ll get to use to achieve their personal goals. </p>
                                        </div>
                                    </MobileView>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="emclass-inpage-image">
                                <BrowserView>
                                    <Layer settings={{ speed: 0.2, type: ["translateX"] }}>
                                        <img src={img_im3} alt="partners" />
                                    </Layer>
                                </BrowserView>
                                <MobileView>
                                    <img src={img_im3} alt="partners" />
                                </MobileView>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="emborrow-inpage-area pb-100 desk_view">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="emborrow-inpage-area-image">
                                <BrowserView>
                                    <Layer settings={{ speed: -0.2, type: ["translateX"] }}>
                                        <img src={img_im4} alt="partners" />
                                    </Layer>
                                </BrowserView>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="emborrow-inpage-area-content">
                                <div className="emborrow-inpage_inn">
                                    <Fade right duration={3000}>
                                        <div className="section-title mt-45">
                                            <h1 className="title">emBorrow</h1>
                                        </div>
                                    </Fade>
                                    <Fade duration={3000}>
                                        <div className="content_section">
                                            <p>The mission of emBorrow is to provide financing for fertility related procedures. Though, we’re more
                                                than providing
                                                fertility financing. <br />
                                                <br />
                                                Emborrow cares about the well-being of its members, wherever their journey may take them. From talking
                                                with others
                                                who are going through similar experiences to helpful resources and everything in between, connect with
                                                emBorrow’s
                                                network. </p>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="emborrow-inpage-area pb-70 mob_view">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="emborrow-inpage-area-content">
                                <div className="emborrow-inpage_inn">
                                    <div className="section-title mt-45">
                                        <h1 className="title">emBorrow</h1>
                                    </div>
                                    <div className="content_section">
                                        <p>The mission of emBorrow is to provide financing for fertility related procedures. Though, we’re more
                                            than providing
                                            fertility financing. <br />
                                            <br />
                                            Emborrow cares about the well-being of its members, wherever their journey may take them. From talking
                                            with others
                                            who are going through similar experiences to helpful resources and everything in between, connect with
                                            emBorrow’s
                                            network. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="emborrow-inpage-area-image"> <img src={img_im4} alt="partners" /> </div>
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
                                        <a onClick={(e) => { e.preventDefault(); history.push('/') }} href="#">Home</a> 
                                        <a href="mailto:information@emhealthfertility.com">Contact Us</a> 
                                    </nav>
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

export default Why;