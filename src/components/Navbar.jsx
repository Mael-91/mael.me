import React, {Component} from "react"
import brand from "../assets/images/icon-72x72.png"
const css = require('../assets/css/components/navbar.css')
import menu from '../assets/css/modules/hamburger.min.css'
import {slideInRight, slideInLeft} from '../assets/js/libs/ScrollReveal'
import {RevealElements} from "../assets/js/functions/Animations";

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.handleIsActive = this.handleIsActive.bind(this)
        this.handleSidebar = this.handleSidebar.bind(this)
        this.state = {
            menuActive: false
        }
    }

    componentDidMount() {
        slideInLeft.distance = '120px'
        RevealElements('[data-anim="navbar_brand"]', slideInLeft)
        RevealElements('[data-anim="navbar_nav"]', slideInRight)
        slideInRight.distance = '120px'
        RevealElements('[data-anim="mobile_nav"]', slideInRight)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.menuActive !== this.state.menuActive
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.menuActive !== this.state.menuActive) {
            return this.handleSidebar()
        }
    }

    render() {
        return <nav className={css.navbar}>
            <a href="#" className={css.navbar_brand}><img src={brand} alt="mael-91.me navbar logo" data-anim="navbar_brand"/></a>
            <ul className={css.navbar_nav} data-anim="navbar_nav" ref="nav">
                <li><a href="#" className={css.nav_item}>Intro</a></li>
                <li><a href="#skills" className={css.nav_item}>Skills</a></li>
                <li><a href="#" className={css.nav_item}>Projects</a></li>
                <li><a href="#" className={css.nav_item}>Works</a></li>
                <li><a href="#" className={css.nav_item}>Contact</a></li>
            </ul>
            <button data-anim="mobile_nav" className={`${menu.hamburger} ${menu.hamburger_slider} 
            ${this.state.menuActive ? menu.is_active + ' m_nav_active': ''}`} onClick={this.handleIsActive}>
                <span className={menu.hamburger_box}>
                    <span className={menu.hamburger_inner} />
                </span>
            </button>
            <div className={`${css.mobile_nav} text-center ${this.state.menuActive ? css.m_nav_active: ''}`}>
                <ul ref="mobileNav"></ul>
            </div>
        </nav>
    }

    handleIsActive() {
        this.setState({menuActive: !this.state.menuActive})
    }

    handleSidebar() {
        if (!this.state.menuActive) {
            this.refs.mobileNav.innerHTML = ''
        } else {
            this.refs.mobileNav.innerHTML = this.refs.nav.innerHTML
        }
    }
}