import React, {Component} from "react"
import Footer from "./components/Footer";
import "./assets/css/app.css"
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";
import Technologies from "./components/Technologies";
import Debounce from "./assets/js/functions/DOMTimer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.handleScreenResize = Debounce(this.handleScreenResize.bind(this), 500)
        this.state = {
            screenSize: window.screen.width
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleScreenResize)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.screenSize !== prevState.screenSize) {
            this.handleScreenResize()
        }
    }

    handleScreenResize() {
        this.setState({screenSize: window.screen.width})
    }

    render() {
        return <div className="App">
            <Navbar/>
            <LandingPage/>
            <Skills screenSize={this.state.screenSize}/>
            <Technologies screenSize={this.state.screenSize}/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    }
}
