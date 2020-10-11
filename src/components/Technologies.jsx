import React from "react"
import {RevealElements} from "../assets/js/functions/Animations";
import css from '../assets/css/components/skills_technos.css'
import gitLogo from '../assets/images/svg/git.svg'
import githubLogo from '../assets/images/svg/mark-github.svg'
import phpStormLogo from '../assets/images/svg/phpstorm.svg'
import debianLogo from '../assets/images/svg/debian.svg'
import travisCILogo from '../assets/images/svg/travisci.svg'
import webStormLogo from '../assets/images/svg/webstorm.svg'
import {fadeIn, slideInLeft, slideInRight} from "../assets/js/libs/ScrollReveal";

export default class Technologies extends React.Component {

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
        return <div className={css.bg_light}>
            <div className={css.technologies_section}>
                <h1 className="text-center" id="technologies">Technologies</h1>
                <h5 className="text-center">Les outils que j'utilise</h5>
                <div className={`grid`}>
                    <div className={css.technologies_block_card} data-anim="techFromLeft">
                        <div className={css.technologies_block_card_svg}>
                            <svg viewBox={gitLogo.viewBox} className="icon-git">
                                <use xlinkHref={'#' + gitLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">Git</h5>
                        <p className="text-center">Pour gérer le versioning de mes projets.</p>
                    </div>
                    <div className={css.technologies_block_card} data-anim="techFadeIn">
                        <div className={css.technologies_block_card_svg}>
                            <svg viewBox={githubLogo.viewBox} className="icon-github-mark">
                                <use xlinkHref={'#' + githubLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">Github</h5>
                        <p className="text-center">
                            C'est le site sur lequel mes projets open source sont disponible, j'y héberge également mes projets privés.
                        </p>
                    </div>
                    <div className={css.technologies_block_card} data-anim="techFromRight">
                        <div className={css.technologies_block_card_svg}>
                            <svg viewBox={phpStormLogo.viewBox} className="icon-phpstorm">
                                <use xlinkHref={'#' + phpStormLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">PHPStorm</h5>
                        <p className="text-center">
                            J'utilise les différents logiciels fournit par JetBrains en fonction de mes besoin, des langages utilisés.
                        </p>
                    </div>
                    <div className={css.technologies_block_card} data-anim="techFromLeft">
                        <div className={css.technologies_block_card_svg}>
                            <svg viewBox={debianLogo.viewBox} className="icon-debian">
                                <use xlinkHref={'#' + debianLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">Debian</h5>
                        <p className="text-center">
                            La distribution Debian est celle que j'utilise chaque fois que j'ai besoin d'un environnement sous Docker, pour les bases de données, php, ...
                        </p>
                    </div>
                    <div className={css.technologies_block_card} data-anim="techFadeIn">
                        <div className={css.technologies_block_card_svg}>
                            <svg viewBox={travisCILogo.viewBox} className="icon-travisci">
                                <use xlinkHref={'#' + travisCILogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">Travis CI</h5>
                        <p className="text-center">
                            Cet outils me permet d'automatiser les tâches<br/> (e.g.: tests unitaires, déploiement de site statique sur GitHub Page,
                            publication de version pour les packages NPM, ...).
                        </p>
                    </div>
                    <div className={css.technologies_block_card} data-anim="techFromRight">
                        <div className={css.technologies_block_card_svg}>
                            <svg viewBox={webStormLogo.viewBox} className="icon-webstorm">
                                <use xlinkHref={'#' + webStormLogo.id}></use>
                            </svg>
                        </div>
                        <h5 className="text-center">WebStorm</h5>
                        <p className="text-center">
                            J'utilise Webstorm lorsque je travail sur des projets utilisant exclusivement JavaScript, HTML, CSS tels que les sites statiques (comme celui-ci).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    }

    handleAnimations() {
        if (this.props.screenSize <= 1148) {
            RevealElements('[data-anim="techFromLeft"]', fadeIn)
            RevealElements('[data-anim="techFromRight"]', fadeIn)
            RevealElements('[data-anim="techFadeIn"]', fadeIn)
        } else {
            RevealElements('[data-anim="techFromLeft"]', slideInLeft)
            RevealElements('[data-anim="techFromRight"]', slideInRight)
            RevealElements('[data-anim="techFadeIn"]', fadeIn)
        }
    }
}
