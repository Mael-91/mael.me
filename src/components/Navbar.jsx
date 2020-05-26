import React, {Component} from "react"
import brand from "../assets/images/icon-72x72.png"
const css = require('../assets/css/components/navbar.css')
import ScrollReveal from "scrollreveal";
import {slideInRight, slideInLeftBrand} from '../assets/js/libs/ScrollReveal'

export default class Navbar extends Component {

    componentDidMount() {
        ScrollReveal().reveal(this.refs.navbar_nav, slideInRight)
        ScrollReveal().reveal(this.refs.navbar_brand, slideInLeftBrand)
    }

    render() {
        return <nav className={css.navbar}>
            <a href="#" className={css.navbar_brand}><img src={brand} alt="mael-91.me navbar logo" ref="navbar_brand"/></a>
            <ul className={css.navbar_nav} ref="navbar_nav">
                <li><a href="#" className={css.nav_item}>Intro</a></li>
                <li><a href="#" className={css.nav_item}>Skills</a></li>
                <li><a href="#" className={css.nav_item}>Projects</a></li>
                <li><a href="#" className={css.nav_item}>Works</a></li>
                <li><a href="#" className={css.nav_item}>Contact</a></li>
            </ul>
        </nav>
    }
}