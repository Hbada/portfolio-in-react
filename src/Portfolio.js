import React, { Component } from 'react';
import Pokedex from './Pokedex';

var EmilyBlog = require('./img/EmilyBlog.png');

class Portfolio extends Component {
    static defaultProps = {
        projects : [
            { id: 1, name: 'Emily\'s Adventures game', type: 'Unity 2D game', year: 2018, base_experience: 1 },
            { id: 2, name: 'Emily\'s Adventures blog', type: 'blog website', year: 2019, base_experience: 1, img: EmilyBlog },
            { id: 3, name: 'Movie database', type: 'Python database app', year: 2019, base_experience: 1 },
            { id: 4, name: 'Nonprofit social media', type: 'video', year: 2016, base_experience: 1 },
            { id: 5, name: 'Ghoul Number Guess', type: 'Unity 2D game', year: 2018, base_experience: 1 },
            { id: 6, name: 'This web app', type: 'React front-end app', year: 2019, base_experience: 1 }
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