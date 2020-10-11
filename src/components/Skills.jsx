import React from "react"
import css from "../assets/css/components/skills_technos.css"
import linuxLogo from "../assets/images/svg/linux.svg"
import dockerLogo from "../assets/images/svg/docker.svg"
import phpLogo from "../assets/images/svg/php.svg"
import csshtmlLogo from "../assets/images/svg/css_html.svg";
import jsLogo from "../assets/images/javascript.png";
import serverLogo from "../assets/images/svg/server.svg";
import {fadeIn, slideInLeft, slideInRight} from "../assets/js/libs/ScrollReveal";
import {RevealElements} from "../assets/js/functions/Animations";

export default class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.handleAnimations = this.handleAnimations.bind(this)
    }

    componentDidMount() {
        this.handleAnimations()
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.screenSize !== nextProps.screenSize
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.screenSize !== prevProps.screenSize) {
            this.handleAnimations()
        }
    }

    render() {
        return <section className={css.skills_section}>
            <div className={css.skills_block}>
                <h1 className="text-center" id="skills">Compétences</h1>
                <h5 className="text-center">Ce que je sais faire</h5>
                <div className="grid">
                    <div data-anim="skillsSlideLeft" className={css.skills_block_card}>
                        <div className={css.skills_block_card_svg}>
                            <svg viewBox={linuxLogo.viewBox} className="icon-linux">
                                <use xlinkHref={'#' + linuxLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">Linux</h5>
                        <p className="text-center">Création, gestion et installation de machine sous Linux.</p>
                    </div>
                    <div data-anim="skillsSlideLeft" className={css.skills_block_card}>
                        <div className={css.skills_block_card_svg}>
                            <svg viewBox={dockerLogo.viewBox} className="icon-docker">
                                <use xlinkHref={'#' + dockerLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">Docker</h5>
                        <p className="text-center">Déployer des environnements sous Docker.</p>
                    </div>
                    <div data-anim="skillsSlideLeft" className={css.skills_block_card}>
                        <div className={css.skills_block_card_svg}>
                            <svg viewBox={phpLogo.viewBox} className="icon-php">
                                <use xlinkHref={'#' + phpLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">PHP</h5>
                        <p className="text-center">Développement sous Symfony, maintenance, création d'API REST via API Platform.</p>
                    </div>
                    <div data-anim="skillsSlideRight" className={css.skills_block_card}>
                        <div className={css.skills_block_card_svg}>
                            <svg viewBox={csshtmlLogo.viewBox} className="icon-css-html">
                                <use xlinkHref={'#' + csshtmlLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">CSS</h5>
                        <p className="text-center">Développement et intégration de design front-end.</p>
                    </div>
                    <div data-anim="skillsSlideRight" className={css.skills_block_card}>
                        <div className={css.skills_block_card_svg}>
                            <div className={css.skills_block_card_svg}>
                                <img src={jsLogo} alt="JavaScript logo" className="img-js"/>
                            </div>
                        </div>
                        <h5 className="text-center">JavaScript & Framework</h5>
                        <p className="text-center">Développement et maintenance de Wep App, temps réel et plein d'autres choses.</p>
                    </div>
                    <div data-anim="skillsSlideRight" className={css.skills_block_card}>
                        <div className={css.skills_block_card_svg}>
                            <svg viewBox={serverLogo.viewBox} className="icon-server">
                                <use xlinkHref={'#' + serverLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">Linux Server</h5>
                        <p className="text-center">Installation, gestion de services / outils pour les serveurs WEB.</p>
                    </div>
                </div>
            </div>
        </section>
    }

    handleAnimations() {
        if (this.props.screenSize <= 1148) {
            RevealElements('[data-anim="skillsSlideLeft"]', fadeIn)
            RevealElements('[data-anim="skillsSlideRight"]', fadeIn)
        } else {
            slideInLeft.duration = 700
            slideInLeft.distance = '1500px'
            RevealElements('[data-anim="skillsSlideLeft"]', slideInLeft)
            slideInRight.duration = 700
            slideInRight.distance = '1500px'
            RevealElements('[data-anim="skillsSlideRight"]', slideInRight)
        }
    }
}
