import React, {Component} from "react"
import { Routes, Route, Link } from 'react-router-dom'
import Footer from "./components/Footer";
import "./assets/css/app.css"
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

export default class App extends Component {

    render() {
        return <div className="App">
            <Navbar/>
            <LandingPage/>
            <Footer/>
        </div>
    }
}