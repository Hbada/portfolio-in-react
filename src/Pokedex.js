import React, { Component } from 'react';
import Projectcard from './Projectcard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        let title;
        // if(this.props.isWinner) {
        //     title = <h1 className="Pokedex-winner">Web and game development</h1>;
        // } else {
        //     title = <h1 className="Pokedex-loser">Data analysis and data science</h1>;
        // };
        return (
            <div className="Pokedex">
                <h1>{title}</h1>
                <h4>Total projects: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {this.props.projects.map((p) => (
                        <Projectcard id={p.id} img={p.img} alt={p.altText} name={p.name} type={p.type} exp={p.year} />
                    ))}
                </div>  
            </div>
        );
        
    }
}

export default Pokedex;