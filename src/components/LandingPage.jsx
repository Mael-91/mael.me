import React from "react"
import css from '../assets/css/components/landing_page.css'
import face from "../assets/images/svg/face.svg";

export default class LandingPage extends React.Component {

    render() {
        return <div className={css.landing_page}>
            <div className={css.landing_page_intro}>
                <h1 className="text-center">Mael-91</h1>
                <h5 className="text-center">Jeune débutant dans le monde du développement</h5>
                <p >
                    Tout a commencé au cours de l'année 2019, où je me suis davantage concentré sur le développement web, j'ai commencé avec <span>HTML</span>,
                    <span>CSS</span> et <span>JavaScript</span> puis je suis passé au développement back-end pour apprendre <span>PHP</span>,
                    depuis je travaille beaucoup^sur des projets personnels pour mettre mes compétences en pratique et utiliser des framework (tels que Symfony).<br/><br/>
                    Depuis 2020, ayant de bonne base en <span>JavaScript</span>, je me suis orienté vers les
                    frameworks front-end (<span>React</span>, <span>preact</span> actuellement).
                </p>
            </div>
            <div className={css.landing_page_face}>
                <svg viewBox={face.viewBox} className="face">
                    <use xlinkHref={'#' + face.id}></use>
                </svg>
            </div>
        </div>
    }
}
