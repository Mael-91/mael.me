import React from "react"
import css from '../assets/css/components/projects.css'
import {RevealElements} from "../assets/js/functions/Animations";
import {fadeIn} from "../assets/js/libs/ScrollReveal";
import {languages} from "../assets/js/functions/Languages";
import repoLogo from '../assets/images/svg/repo.svg'
import repoForkedLogo from '../assets/images/svg/repo-forked.svg'
import lawLogo from '../assets/images/svg/law.svg'
import eyeLogo from '../assets/images/svg/eye.svg'
import githubLogo from '../assets/images/svg/mark-github.svg'
import LoaderComponent from "../assets/js/components/LoaderComponent";

export default class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            repo: [],
            isLoading: false
        }
    }

    async componentDidMount() {
        await this.getRepository()
        this.handleAnimation()
    }

    render() {
        return <section className={css.projects_section}>
            <div className={css.projects_block}>
                <h1 className="text-center" id="projects">Projects</h1>
                <div className={css.project_block_cards}>
                    {
                        this.state.isLoading ? <div style={{display: 'flex', justifyContent: 'center'}}><LoaderComponent/></div> : null
                    }
                    <ol>
                        {this.renderRepoCard()}
                    </ol>
                </div>
            </div>
        </section>
    }

    renderRepoCard() {
        console.log(this.state.repo)
        return this.state.repo.map((repo) =>
            <li data-anim="repo_cards" key={repo.id}>
                <div className={css.project_block_card} iscontrib={repo.fork.toString()}>
                    <div className={css.project_block_card_content}>
                        <div className={css.project_block_card_head}>
                            <svg viewBox={repoLogo.viewBox} className="icon-repo">
                                <use xlinkHref={'#' + repoLogo.id}/>
                            </svg>
                            <a href={repo.html_url}>{repo.full_name}</a>
                            <div className={css.card_head_github_info}>
                                <span>
                                    <a href={repo.html_url} title="See source code">
                                        <svg viewBox={githubLogo.viewBox} className="icon-github-mark">
                                            <use xlinkHref={'#' + githubLogo.id}/>
                                        </svg>
                                    </a>
                                </span>
                                <span>
                                    <a href={repo.html_url + '/fork'} title={repo.forks_count + ' Forks'}>
                                        <svg viewBox={repoForkedLogo.viewBox} className="icon-repo-forked">
                                            <use xlinkHref={'#' + repoForkedLogo.id}/>
                                        </svg>
                                    </a>
                                </span>
                                <span>
                                    <a href={repo.html_url + '/watchers'} title={repo.stargazers_count + ' Watchers'}>
                                        <svg viewBox={eyeLogo.viewBox} className="icon-eye">
                                            <use xlinkHref={'#' + eyeLogo.id}/>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <p className={css.card_description}>{repo.description}</p>
                        <p className={css.card_languages}>
                        <span>
                            <span className={css.language_color} style={this.renderLanguageColor(repo.language)}/>
                            <span className={css.language_name}>{repo.language}</span>
                        </span>
                            <span className={css.repo_license}>
                            <svg viewBox={lawLogo.viewBox} className="icon-law">
                                <use xlinkHref={'#' + lawLogo.id}/>
                            </svg>
                            <span className={css.language_name}>MIT License</span>
                        </span>
                        </p>
                    </div>
                </div>
            </li>
        )
    }

    renderLanguageColor(lang) {
        if (lang === null || lang === undefined) {
            return;
        }
        const color = languages.find(language => language.name === lang)
        return {backgroundColor: color.color}
    }

    handleAnimation() {
        RevealElements('[data-anim="repo_cards"]', fadeIn)
    }

    async getRepository() {
        this.setState({isLoading: !this.state.isLoading})
        const response = await this.fetch('https://api.github.com/users/Mael-91/repos')
        this.setState({repo: response, isLoading: !this.state.isLoading})

    }

    async fetch(url, params) {
        params = Object.assign({
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET'
        }, params)
        const response = await fetch(url, params)
        return await response.json()
    }
}