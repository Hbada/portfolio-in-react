import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Portfolio extends Component {
    static defaultProps = {
        projects : [
            { id: 1, name: 'Emily\'s Adventures game', type: 'Unity 2D game', base_experience: 2018 },
            { id: 2, name: 'Emily\'s Adventures blog', type: 'blog website', base_experience: 2019 },
            { id: 3, name: 'Movie database', type: 'Python database app', base_experience: 2019 },
            { id: 4, name: 'Nonprofit social media', type: 'video', base_experience: 2016 },
            { id: 5, name: 'Ghoul Number Guess', type: 'Unity 2D game', base_experience: 2018 },
            { id: 6, name: 'This web app', type: 'React front-end app', base_experience: 2019 }
        ]
    };

    render() {
        let hand1 = [];
        let hand2 = [...this.props.projects ];
        while( hand1.length < hand2.length ) {
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randprojects = hand2.splice(randIdx, 1)[0];
            hand1.push(randprojects);
        }
        let exp1 = hand1.reduce((exp, projects) => exp + projects.base_experience, 0);
        let exp2 = hand2.reduce((exp, projects) => exp + projects.base_experience, 0);
        return (
            <div>
                <Pokedex projects={hand1} exp={exp1} isWinner={ exp1 > exp2 } />
                <Pokedex projects={hand2} exp={exp2} isWinner={ exp2 > exp1 } />
            </div>
        );
    }
}

export default Portfolio;