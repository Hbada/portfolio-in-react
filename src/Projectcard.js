import React, { Component } from 'react';
import './Projectcard.css';

//const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
//const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

//let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Projectcard extends Component {
    render() {
        //let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return ( 
            <div className="Projectcard">
                <h1 className="Projectcard-title">{this.props.name}</h1>
                <img src={this.props.img} alt={this.props.alt} />
                <div className="Projectcard-data">{this.props.type}</div>
                <div className="Projectcard-data">{this.props.exp}</div>
            </div>
        );
    }
};

export default Projectcard;