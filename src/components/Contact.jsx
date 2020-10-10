import React from "react"
import css from "../assets/css/components/contact.css"
import {RevealElements} from "../assets/js/functions/Animations";
import {slideInLeft} from "../assets/js/libs/ScrollReveal";

export default class Contact extends React.Component {

    componentDidMount() {
        RevealElements('[data-anim="contact"]', slideInLeft)
    }

    render() {
        return <div className={css.contact} data-anim="contact" id="contact">
            <div className={css.contact_block}>
                <h1>Me Contacter</h1>
                <form method="post">
                    <input type="text" placeholder="Prénom" name="firstname"/>
                    <input type="text" placeholder="Nom de famille" name="lastname"/>
                    <input type="email" placeholder="Adresse mail" name="email"/>
                    <input type="text" placeholder="Objet" name="subject"/>
                    <textarea placeholder="Votre message" name="message"/>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    }
}
