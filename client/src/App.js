import React from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';

export const coachAndPlayers = totalPlayers =>{
  return totalPlayers + newNum;
}


class App extends React.Component {
  constructor(){
    super();
  this.state = {
    players: []
  };
}
    componentDidMount(){
      //data for players
      fetch(`http://localhost:5000/api/players`)
      .then(response => response.json())
      .then(playerData => {
          this.setState({
            ...this.state, players: playerData
          })
          console.log(playerData)
      })
      .catch(err => {console.log('No data for player', err)})
    };
    
  render(){
  return (
    <div className="App">
      {this.state.players.map(e => {
        return(
        <PlayerCard
          name={e.name}
          country={e.country}
          searches={e.searches}
        />
        );
      })}
    </div>
  );
  }
}

export default App;
