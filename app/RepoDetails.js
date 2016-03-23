import React, {Component} from 'react';
import {Link} from 'react-router';
import 'whatwg-fetch';

class RepoDetails extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            repository: {}
        }
    }

    renderRepository() {
        let repository = this.props.repositories.find((repo)=>repo.name === this.props.params.repo_name);
        let stars = [];
        if (repository) {
            for (var i = 0; i < repository.stargazers_count; i++) {
                stars.push('');
            }
            return (
                <div>
                    <h2>{repository.name}</h2>
                    <p>{repository.description}</p>
                    {stars}
                </div>
            )
        }
        else {
            this.props.history.pushState(null, '/error');
            return (
                <div>
                    <h2>{this.props.params.repo_name} isn't exists</h2>
                </div>
            )
        }
    }

    render() {
        console.log('repos: ' + this.props.repositories.length);
        if (this.props.repositories.length > 0) {
            return this.renderRepository()
        }
        else {
            return (<h4>Loading ...</h4>);
        }
    }
}

export default RepoDetails;