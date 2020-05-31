import React from "react"
import css from '../../css/modules/loader.css'

export default class LoaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.loaderType = this.loaderType.bind(this)
        this.state = {
            message: this.props.message ? this.props.message : 'Loading ...',
            type: this.props.type ? this.props.type : 'default',
            loader: null
        }
    }

    componentDidMount() {
        this.loaderType()
    }

    render() {
        return <div className={css.loader_element}>
            <span className={`${css.loader} ${this.state.loader}`}>{this.state.type === 'bars' && <span/>}</span>
            <p className={css.rainbow}>{this.state.message}</p>
        </div>
    }

    loaderType() {
        const type = this.state.type
        if (type === 'default') {
            this.setState({loader: css.loader_default})
        } else if (type === 'double') {
            this.setState({loader: css.loader_double})
        } else if (type === 'circles') {
            this.setState({loader: css.loader_circles})
        } else if (type === 'circles-double') {
            this.setState({loader: css.loader_circles_double})
        } else if (type === 'bars') {
            this.setState({loader: css.loader_bars})
        } else {
            this.setState({loader: css.loader_default})
        }
    }
}