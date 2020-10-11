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
            isLoading: false,
            repoID: [296965211, 296965004, 280388702, 278080130, 276194602, 266626913, 265246149, 265201825, 264166089, 263693099, 251117693]
        }
    }

    async componentDidMount() {
        await this.getRepository()
        this.handleAnimation()
    }

    render() {
        return <section className={css.projects_section}>
            <div className={css.projects_block}>
                <h1 className="text-center" id="projects">Projets</h1>
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
                        {
                            repo.language &&
                            <span>
                                <span className={css.language_color} style={this.renderLanguageColor(repo.language)}/>
                                <span className={css.language_name}>{repo.language}</span>
                            </span>
                        }
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
        let repo = [];
        this.setState({isLoading: !this.state.isLoading})
        const request = await fetch('https://api.github.com/users/Mael-91/repos?sort=created')
        const response = await request.json()
        for (let i = 0; i < response.length; i++) {
            this.state.repoID.forEach(id => {
                if (response[i].id === id) {
                    repo.push(response[i])
                }
            })
        }
        this.setState({repo: repo, isLoading: !this.state.isLoading})
    }

    async getRepoID() {
        const request = await fetch('https://api.portfolio.mael-91.me/repo')
        const response = await request.json()
        this.setState({repoID: response})
    }
}
