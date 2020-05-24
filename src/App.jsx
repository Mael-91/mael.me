import React, {Component} from "react"
import { Routes, Route, Link } from 'react-router-dom'
import Footer from "./components/Footer";
import "./assets/css/app.css"

export default class App extends Component {

    render() {
        return <div>
            <Footer/>
        </div>
    }
}