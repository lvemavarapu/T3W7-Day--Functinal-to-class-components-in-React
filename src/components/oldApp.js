import React from 'react'
import pokemons from '../data/pokemons'

//const url ="https://pokeapi.co/api/v2/pokemon/?limit=25"
// let pokemons =[]
// fetch(url)
// .then(response => response.json())
// .then(data => {
//   console.log(data)
//   pokemons =data.results
//   console.log(pokemons)
// })
// .catch(e => {console.log(e)})
//console.log("I am out of fetch", pokemons)

const App = () => {
let name = "pikachu"

  const changeValue =(e) => {
    name = e.target.value
    console.log(name)
    
  }
  return (
    <div >
          <h1>All about Pokemon</h1>
          <p> we are  viewing {pokemons.length} pokemons</p>
          <select onChange  ={changeValue}>
            {pokemons.map((obj, index) => {return <option key ={index} value ={obj.name} >{obj.name}</option>
            })}
            </select>
            <p>You have selected {name}</p>
    </div>
  )
}

export default App
