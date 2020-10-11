import React from "react"
import css from "../assets/css/components/contact.css"
import {RevealElements} from "../assets/js/functions/Animations";
import {slideInLeft} from "../assets/js/libs/ScrollReveal";

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.send = this.send.bind(this)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            subject: "",
            message: "",
            isLoading: false,
            success: false,
            responseMessage: ""
        }
    }

    componentDidMount() {
        RevealElements('[data-anim="contact"]', slideInLeft)
    }

    render() {
        return <div className={css.contact} data-anim="contact" id="contact">
            <div className={css.contact_block}>
                <h1>Me Contacter</h1>
                <form method="post" encType="application/x-www-form-urlencoded" onSubmit={this.send}>
                    <input type="text" placeholder="Prénom" name="firstname" onChange={this.handleChange}/>
                    <input type="text" placeholder="Nom de famille" name="lastname" onChange={this.handleChange}/>
                    <input type="email" placeholder="Adresse mail" name="email" onChange={this.handleChange}/>
                    <input type="text" placeholder="Objet" name="subject" onChange={this.handleChange}/>
                    <textarea placeholder="Votre message" name="message" onChange={this.handleChange}/>
                    {
                        this.state.isLoading ? <button type="submit" disabled={true}>Envoi en cours ...</button> : <button type="submit">Envoyer</button>
                    }
                    {
                        this.state.success ? <span className={css.success}>{this.state.responseMessage}</span> : <span className={css.error}>{this.state.responseMessage}</span>
                    }
                </form>
            </div>
        </div>
    }

    handleChange(event) {
        const name = event.target.name
        if (name === "firstname") {this.setState({firstname: event.target.value})}
        if (name === "lastname") {this.setState({lastname: event.target.value})}
        if (name === "email") {this.setState({email: event.target.value})}
        if (name === "subject") {this.setState({subject: event.target.value})}
        if (name === "message") {this.setState({message: event.target.value})}
    }

    async send(event) {
        event.preventDefault()
        this.setState({isLoading: true})
        const state = this.state
        if (state.firstname === "" || state.lastname === "" || state.email === ""
            || state.subject === "" || state.message === "")
        {
            this.setState({isLoading: false, success: false, responseMessage: "Fields cannot be empty."})
            return;
        }
        const data = new URLSearchParams();
        data.append("Firstname", this.state.firstname)
        data.append("Lastname", this.state.lastname)
        data.append("Email", this.state.email)
        data.append("Subject", this.state.subject)
        data.append("Message", this.state.message)
        data.append("ReCaptcha", "null")
        const params = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            body: data
        }
        const request = await fetch("http://127.0.0.1:2020/contact", params)
        const response = await request.json()
        if (response.Code === 200) {
            this.setState({
                success: true,
                responseMessage: response.Message,
                isLoading: false,
                firstname: "",
                lastname: "",
                email: "",
                subject: "",
                message: ""
            })
        } else {
            this.setState({responseMessage: response.Message, success: false, isLoading: false})
        }
    }
}
