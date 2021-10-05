import React, { Component } from 'react'
import pokemons from '../data/pokemons'


class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: "Pikachu",
            pokemon: null
        }
    }
componentDidMount(){
    this.getPokemon(this.state.name)
}

   getPokemon(name){
   fetch("https://pokeapi.co/api/v2/pokemon/"+name)
    .then(response => response.json())
    .then(data => {
        this.setState({pokemon:data.sprites.other["official-artwork"].front_default})
})
        .catch(e => {console.log(e)})
   }

     changeValue =(e) => {
        // name = e.target.value
        // console.log(name)
        console.log(e.target.value)
        this.setState({name:e.target.value})
        this.getPokemon(e.target.value)
        
      }
    render(){
        
        console.log(this.state)
        return(
            <div >
            <h1>All about Pokemon</h1>
            <p> we are  viewing {pokemons.length} pokemons</p>
          <select onChange  ={this.changeValue}>
            {pokemons.map((obj, index) => {return <option key ={index} value ={obj.name} >{obj.name}</option>
            })}
            </select>
            <p>You have selected {this.state.name}</p>
            <img src = {this.state.pokemon} alt = {this.state.name}/>

    </div>
        )
    }

}
export default  App