import React from "react"
import css from "../assets/css/components/skills.css"
import linuxLogo from "../assets/images/svg/linux.svg"
import dockerLogo from "../assets/images/svg/docker.svg"
import phpLogo from "../assets/images/svg/php.svg"
import csshtmlLogo from "../assets/images/svg/css_html.svg";
import jsLogo from "../assets/images/javascript.png";
import serverLogo from "../assets/images/svg/server.svg";
import {slideInLeft, slideInRight} from "../assets/js/libs/ScrollReveal";
import {RevealElements} from "../assets/js/functions/Animations";

export default class Skills extends React.Component {

    componentDidMount() {
        this.handleAnimations()
    }

    render() {
        return <section className={css.skills_section}>
            <div className={css.skills_block}>
                <h1 className="text-center" id="skills">Skills</h1>
                <div className="grid">
                    <div data-anim="skillsSlideLeft" className={css.skills_block_card}>
                        <div className={css.skills_block_card_svg}>
                            <svg viewBox={linuxLogo.viewBox} className="icon-linux">
                                <use xlinkHref={'#' + linuxLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">Linux</h5>
                        <p className="text-center">Creation, management and installation of the Linux distrubition</p>
                    </div>
                    <div data-anim="skillsSlideLeft" className={css.skills_block_card}>
                        <div className={css.skills_block_card_svg}>
                            <svg viewBox={dockerLogo.viewBox} className="icon-docker">
                                <use xlinkHref={'#' + dockerLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">Docker</h5>
                        <p className="text-center">Deploy servers running on Dock containers</p>
                    </div>
                    <div data-anim="skillsSlideLeft" className={css.skills_block_card}>
                        <div className={css.skills_block_card_svg}>
                            <svg viewBox={phpLogo.viewBox} className="icon-php">
                                <use xlinkHref={'#' + phpLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">PHP</h5>
                        <p className="text-center">Development, maintenance under Symfony. REST API creation via API Platform</p>
                    </div>
                    <div data-anim="skillsSlideRight" className={css.skills_block_card}>
                        <div className={css.skills_block_card_svg}>
                            <svg viewBox={csshtmlLogo.viewBox} className="icon-css-html">
                                <use xlinkHref={'#' + csshtmlLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">CSS</h5>
                        <p className="text-center">Front end development and design integration</p>
                    </div>
                    <div data-anim="skillsSlideRight" className={css.skills_block_card}>
                        <div className={css.skills_block_card_svg}>
                            <div className={css.skills_block_card_svg}>
                                <img src={jsLogo} alt="JavaScript logo" className="img-js"/>
                            </div>
                        </div>
                        <h5 className="text-center">JavaScript & Framework</h5>
                        <p className="text-center">Web App development and maintenance, real time and many other things</p>
                    </div>
                    <div data-anim="skillsSlideRight" className={css.skills_block_card}>
                        <div className={css.skills_block_card_svg}>
                            <svg viewBox={serverLogo.viewBox} className="icon-server">
                                <use xlinkHref={'#' + serverLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">Linux Server</h5>
                        <p className="text-center">Installation, maintenance and management of services / tools for web servers</p>
                    </div>
                </div>
            </div>
        </section>
    }

    handleAnimations() {
        slideInLeft.duration = 700
        slideInLeft.distance = '1500px'
        RevealElements('[data-anim="skillsSlideLeft"]', slideInLeft)
        slideInRight.duration = 700
        slideInRight.distance = '1500px'
        RevealElements('[data-anim="skillsSlideRight"]', slideInRight)
    }
}